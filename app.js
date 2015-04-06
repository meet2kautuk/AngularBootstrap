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

AvenueBlogApp.factory("MathFactory", function () {
    return {
        getSquare: function(num){
            return num * num;
        },
        getRandom: function(){
            return Math.random();
        }
    };
});

AvenueBlogApp.service("MathService", function (MathFactory) {
    this.getExpectedComments = function(lines){
        return MathFactory.getSquare(lines);
    };
});

AvenueBlogApp.value("version", "1.0");
AvenueBlogApp.value("appStrings", {
    title: "Avenue Blog"
});


