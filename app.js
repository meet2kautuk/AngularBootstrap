var AvenueBlogApp = angular.module("AvenueBlog", []);


AvenueBlogApp.controller("WelcomeController", function($scope) {
    $scope.helloTo = {};
    $scope.helloTo.title = "Avenue Blog";
    $scope.titlesAvailable = ["JavaScript", "Node JS", "Angular JS"];
    $scope.popularTags = [{tag:"Open Source", rank: 3}, {tag:"JavaScript", rank: 2}, {tag:"JS", rank: 1}, {tag:"Node JS", rank: 4}];
 });;