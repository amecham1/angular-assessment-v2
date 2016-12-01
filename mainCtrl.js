angular.module("assessment")
.controller("mainCtrl",function ($scope, mainService,$stateParams) {
  $scope.allPets = function() {
      mainService.getPets("")
      .then(function(response) {
          $scope.items = response.data;
          console.log(response.data);
      });
  };
  $scope.allPets();

})
