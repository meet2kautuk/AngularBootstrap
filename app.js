var AvenueBlogApp = angular.module("AvenueBlog", ['ngRoute']);

AvenueBlogApp.config(['$routeProvider', function($routeProvider){
    $routeProvider.when('/addBlog', {
        templateUrl: "tmplAddBlog.htm",
        controller: "AddBlogController"
    }).when('/addAuthor', {
        templateUrl: "tmplAddAuthor.htm",
        controller: "AddAuhorController"
    }).otherwise({
       redirectTo: '/addBlog'
    });
}]);