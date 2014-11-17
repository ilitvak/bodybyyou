

var bodyApp = angular.module("bodyApp", ["ui.router"]);


bodyApp.config(["$stateProvider","$locationProvider", function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
    });  
  
  $stateProvider.state("home", {
    url: "/",
    controller: "homeCtrl",
    templateUrl: "/templates/home.html"
  });
  
    $stateProvider.state("fats", {
    url: "/fats",
    controller: "fatsCtrl",
    templateUrl: "/templates/fats.html"
  });
  
    $stateProvider.state("carbohydrates", {
    url: "/carbohydrates",
    controller: "carbohydratesCtrl",
    templateUrl: "/templates/carbohydrates.html"
  });
  
    $stateProvider.state("proteins", {
    url: "/proteins",
    controller: "proteinsCtrl",
    templateUrl: "/templates/proteins.html"
  });
  
    $stateProvider.state("breakfast", {
    url: "/breakfast",
    controller: "breakfastCtrl",
    templateUrl: "/templates/breakfast.html"
  });
   
  
  
}]); // closing config tag.

bodyApp.controller("homeCtrl", ["$scope", function($scope) {

 $('.carousel').carousel({  // using jQuery event to start the carousel
 		interval: 5000
	});
  
}]);



bodyApp.controller("fatsCtrl", ["$scope", function($scope) {


}]);

bodyApp.controller("carbohydratesCtrl", ["$scope", function($scope) {
  

}]);

bodyApp.controller("proteinsCtrl", ["$scope", function($scope) {
  

}]);

bodyApp.controller("breakfastCtrl", ["$scope", function($scope) {
  

}]);
