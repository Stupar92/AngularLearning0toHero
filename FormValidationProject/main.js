var app = angular.module('minmax', ['angular-ladda']);

app.controller('MinMaxCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.formModel = {};
    
    $scope.submitting = false;
    
    $scope.onSubmit = function(valid) {
        
        if (valid){
            $scope.submitting = true;
            console.log("Valid :)");
            console.log($scope.formModel);
            
            $http.post('https://minmax-server.herokuapp.com/register/', $scope.formModel)
        .success(function(data) {
            console.log("Got a success response from server");
            console.log(data);
            $scope.submitting = false;
        })
        .error(function(error) {
            console.log("Error");
            console.log(error);
            $scope.submitting = false;
        })
            
        } else {
            console.log("Invalid :(")
        }
       
        
        
    };
}]);