angular.module('assessment')
.service('mainService',function($http,$q){

this.getPets = function(info){
  var defer = $q.defer();
  $http({
    method:"GET",
    url:"http://practiceapi.devmounta.in/pets"+ "/" +  info
  }).then(function(response){
    defer.resolve(response);
  });
  return defer.promise;
}

this.petInfo = function() {
    var deferred = $q.defer();
    $http({
        method: "GET",
        url: "http://practiceapi.devmounta.in/pets/"
    }).then(function(response, err) {
        if (response) {
            deferred.resolve(response);
        } else if (err) {
            console.log("here");
        }
    });
    return deferred.promise;
};
});


// });//end of service
