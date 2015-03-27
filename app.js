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


AvenueBlogApp.service('PermalinkService', function(){
    this.generatePermalinkTitle = function(plainTitle){
        if(plainTitle){
            return plainTitle.toLowerCase().replace(/\W+/g, "-");
        }
    };
});

