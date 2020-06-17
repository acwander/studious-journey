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
  },
]);
