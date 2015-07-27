var artistControllers = angular.module('artistControllers', ['ngAnimate']);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.artistOrder = 'name';
  });
}]);

artistControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.artists = data;
    $scope.whichItem = $routeParams.itemId;

    if ($routeParams.itemId > 0) {
      $scope.prevItem = Number($routeParams.itemId)-1;
    } else {
      $scope.prevItem = $scope.artists.length-1;
    }

    if ($routeParams.itemId < $scope.artists.length-1) {
      $scope.nextItem = Number($routeParams.itemId)+1;
    } else {
      $scope.nextItem = 0;
    }

  });
}]);

artistControllers.controller('SlideViewerController',['$scope','$interval',function($scope, $interval){
      $scope.pictures =[
      {pix:'images/gates.jpg',person: 'Gates'},
      {pix: 'images/hopper.jpg',person: 'Hopper'},
      {pix: 'images/cargill.jpg',person: 'Cargill'}];
      $scope.indexOfPic = 0;
      $scope.callAnUpdate = function() {
        $scope.indexOfPic = ($scope.indexOfPic+1) % 3;
      }
      $interval($scope.callAnUpdate, 3000,0,true,$scope); 
    }]);

function callAtInterval(){
alert("k");
}
