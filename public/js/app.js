const app = angular.module("BooksApp", []);

app.controller("MainController", [
  "$http",
  function ($http) {
    this.hello = "Hello World!";
  },
]);
