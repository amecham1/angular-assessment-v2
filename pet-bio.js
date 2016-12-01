
angular.module("assessment")
.controller("petCtrl", function($scope, mainService, $stateParams) {

  $scope.getPets = function() {
      mainService.getPets($stateParams.obj)
      .then(function(response) {
          $scope.bio = response.data;
          console.log(response.data);
      });
  };
  $scope.getPets();

});
