const app = angular.module("BooksApp", []);

app.controller("MainController", [
  "$http",
  function ($http) {
    this.hello = "Hello World!";
    this.books = [];
    this.updatedBook = {};
    this.newBook = {};


    ///////////////////
    // CREATE
    ///////////////////
    this.createBook = () => {
      $http({
        method: "POST",
        url: "/books",
        data: this.newBook,
      }).then(
        (res) => {
          this.newBook = {};
          this.getBooks();
        },
        (err) => {
          console.log(err);
        }
      );
    };

    //=====
    //Read
    //====
    this.getBooks = () => {

      $http({
        method: "GET",
        url: "/books",
      }).then(
        (response) => {
          this.books = response.data;
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
        url: "/books/" + book._id,
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
    //DELETE
    this.deleteBook = (book) => {
      $http(
        {
          method: 'DELETE',
          url: '/books/' + book._id
        }
      ).then(
        (response) => {
          this.getBooks();
        },
        (error) => {
          console.log(error);
        }
      )
    }
    this.getBooks();
  },

]);
