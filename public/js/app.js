const app = angular.module("BooksApp", []);

app.controller("MainController", [
  "$http",
  function ($http) {
    this.newBook = {};

    // CREATE
    this.createBook = () => {
      $http({
        method: "POST",
        url: "/books",
        data: this.newBook,
      }).then(
        (res) => {
          this.newBook = {};
        },
        (err) => {
          console.log(err);
        }
      );
    };
    //DELETE
    this.deleteBook = function(book) {
      $http(
        {
          method: 'DELETE',
          route: '/books/' + book._id
        }
      ).then(
        function(response){
          controller.getBooks();
        },
        function(error){
          console.log(error);
        }
      )
    }
  },

]);
