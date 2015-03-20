AvenueBlogApp.controller("WelcomeController", function($scope, $http) {
    $scope.helloTo = {};
    $scope.helloTo.title = "Avenue Blog";
    $scope.titlesAvailable = ["JavaScript", "Node JS", "Angular JS"];
    $scope.popularTags = [{tag:"Open Source", rank: 3}, {tag:"JavaScript", rank: 2}, {tag:"JS", rank: 1}, {tag:"Node JS", rank: 4}];
    
    var url = "data/authors.json";
    $http.get(url).success(function(response){
        $scope.authors = response;
    });
    
    
    
 });