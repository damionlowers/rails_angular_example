angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';

  $scope.posts = [
  	{title:'post1',upvotes: 5},
  	{title:'post2',upvotes: 67},
  	{title:'post3',upvotes: 2},
  	{title:'post4',upvotes: 34},
  	{title:'post5',upvotes: 7},
  	{title:'post6',upvotes: 6}
  ];
}]);