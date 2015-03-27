AvenueBlogApp.controller("AddBlogController", function($scope, PermalinkService) {
    
    $scope.message = "This is from AddBlogController";
    $scope.change = function(){
        $scope.titlePermalink = PermalinkService.generatePermalinkTitle($scope.blogTitle);
    };
});