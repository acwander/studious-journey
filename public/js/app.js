const app = angular.module("BooksApp", []);

app.controller("MainController", [
  "$http", function ($http) {

  const controller = this

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

}]);
