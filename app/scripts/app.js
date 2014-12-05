var bodyApp = angular.module("bodyApp", ["ui.router",'firebase', 'ui.bootstrap' ]);




bodyApp.config(["$stateProvider","$locationProvider", function($stateProvider, $locationProvider, $http) {
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
  
  $stateProvider.state("aboutme", {
    url: "/aboutme",
    controller: "aboutmeCtrl",
    templateUrl: "/templates/aboutme.html"
  });

  $stateProvider.state("snacks", {
    url: "/snacks",
    controller: "snacksCtrl",
    templateUrl: "/templates/snacks.html"
  });
   
  $stateProvider.state("lunch", {
    url: "/lunch",
    controller: "lunchCtrl",
    templateUrl: "/templates/lunch.html"
  });
  
  $stateProvider.state("dinner", {
    url: '/dinner',
    controller: 'dinnerCtrl',
    templateUrl: "/templates/dinner.html"
  });
  
}]); // closing config tag.

bodyApp.service('nutritionApi', ['$http', '$q', function($http, $q){
  this.search = function(query){
    var deferred = $q.defer();
    var fields = 'item_name,brand_name,nf_calories,nf_total_fat,nf_total_carbohydrate,nf_sugars,nf_protein';
    var url = "https://api.nutritionix.com/v1_1/search/" + encodeURIComponent(query) + "?appId=d342e8ae&appKey=5328c9d0d85c5c601e2e91d308dc0ff4&fields=" + fields;
      $http.get(url).success(deferred.resolve).error(deferred.reject);
    console.log("searchingFor" + url);
    return deferred.promise
  };
}]);


bodyApp.controller("homeCtrl", ["$scope", function($scope){

  
}]);

bodyApp.controller('CarouselDemoCtrl', ["$scope", function($scope) {

  $scope.myInterval = 3000;
  $scope.slides = [
    {image: "http://i.imgur.com/ZtKoiwG.jpg", description: 'workout' },
    {image: "http://i.imgur.com/vLVXQdO.jpg", description: 'berries' },
    {image: "http://i.imgur.com/kJlDPLe.jpg", descriptino: 'rest'}
    ];
}]);




bodyApp.controller('snacksCtrl', ["$scope", 'nutritionApi', function($scope, nutritionApi){
  
  $scope.searchQuery = '';
  $scope.hasSearchResults = false;
  $scope.searchResults = [];
  
  $scope.search = function(){
    nutritionApi.search($scope.searchQuery).then(onSearchSuccess, onSearchFailure);
    console.log("searchingFor" + $scope.searchQuery);
  };
  
  function onSearchSuccess(data){
    $scope.hasSearchResults = true;
    $scope.searchResults = data;
  }
  
  function onSearchFailure(message){
    console.log("error: ", message);
  }
  
}]);

bodyApp.controller("lunchCtrl", ["$scope", "$state", function($scope, $state) {
  $scope.oils = function(){
    $state.go("fats");
  };

}]);

bodyApp.controller("dinnerCtrl", ["$scope", function($scope){

  
}]);


bodyApp.controller("fatsCtrl", ["$scope", function($scope) {


}]);

bodyApp.controller("carbohydratesCtrl", ["$scope", function($scope) {
  

}]);

bodyApp.controller("proteinsCtrl", ["$scope", function($scope) {
  

}]);

bodyApp.controller("breakfastCtrl", ["$scope", 'nutritionApi', function($scope, nutritionApi) {
  
  $scope.searchQuery = '';
  $scope.hasSearchResults = false;
  $scope.searchResults = [];
  
  $scope.search = function(){
    nutritionApi.search($scope.searchQuery).then(onSearchSuccess, onSearchFailure);
    console.log("searchingFor" + $scope.searchQuery);
  };
  
  function onSearchSuccess(data){
    $scope.hasSearchResults = true;
    $scope.searchResults = data;
  }
  
  function onSearchFailure(message){
    console.log("error: ", message);
  }
  
  
}]);

bodyApp.controller("aboutmeCtrl", ["$scope", function($scope){
  

}]);

bodyApp.controller("contactCtrl", ['$scope', '$firebase', function($scope, $firebase){


  var fire = new Firebase('https://bodybyyou.firebaseio.com');
  $scope.messages = $firebase(fire).$asArray();

  $scope.name ='';
  $scope.email = '';
  $scope.message = '';


  $scope.addMessage = function() {
    $scope.messages.$add({'name': $scope.name, 'email': $scope.email, 'message': $scope.message});
    console.log($scope.name, $scope.email, $scope.message);
    $scope.name = '';
    $scope.email = '';
    $scope.message = '';
  };
  
  console.log(fire);
  
  $scope.sendForm = function(){
    if($scope.userForm.$valid){
     alert('Please baby jesus work');
    }
  }
  
  
}]);




