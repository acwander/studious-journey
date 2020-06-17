const app = angular.module("BooksApp", []);

app.controller("MainController", [
  "$http",
  function ($http) {
    this.hello = "Hello World!";
    this.books = [];
    this.updatedBook = {};

    //=====
    //Read
    //====
    this.getBooks = () => {
      $http({
        method: "GET",
        url: "/books",
      }).then(
        (response) => {
          this.books = reponse.data;
        },
        (err) => {
          console.log(err.message);
        }
      );
    };

    //=======
    //Update
    //=======

    this.editBook = (book) => {
      $http({
        method: "PUT",
        url: "/books/" + book_.id,
        data: this.updatedBook,
      }).then(
        (response) => {
          this.updatedBook = {};
          this.getBooks();
        },
        (err) => {
          console.log(err.message);
        }
      );
    };
  },
]);
