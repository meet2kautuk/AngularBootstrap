var AvenueBlogApp = angular.module("AvenueBlog", []);


AvenueBlogApp.controller("WelcomeController", function($scope) {
    $scope.helloTo = {};
    $scope.helloTo.title = "Avenue Blog";
    $scope.titlesAvailable = ["JavaScript", "Node JS", "Angular JS"];
 });;