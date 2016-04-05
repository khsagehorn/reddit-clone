require('angular-moment');
var ngModule = anglar.module('ngApp',['angularMoment']);
ngModule.constant('moment', require('moment-timezone'));

var app = angular.module('redditClone', []);
angular.module('animateApp', ['ngAnimate']);

app.controller('PostsController', function($scope){
  $scope.posts = [
    {
      id:1,
      title: 'Killer Tofu',
      author: 'Doug Funny',
      date: 1459639925123,    
      image: "http://www.finecooking.com/CMS/uploadedImages/Images/Cooking/Articles/Issues_61-70/fc65be071-01_xlg.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
      rating: 0,
      comments: [
        {
          user: 'Roger',
          date: 1459648289123,
          text: 'OP is a dorkus.'
        },
        {
          user: 'Patty Mayonaise',
          date: 1459648641123,
          text: 'Cut it out, Roger'
        }]
    },

    {
      id:2,
      title: 'Yes, but Why?',
      author: 'Arnold',
      date: 1459527853123,
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Florida_Box_Turtle_Digon3a.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 3,
      comments: []
    },
    
    {
      id:3,
      title: 'Et in America, ego',
      author: 'The Judge',
      date: 1459744943123,
      image: "http://weknowyourdreamz.com/images/desert/desert-04.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 9,
      comments: [
        {
          date: 1459745485123,
          user: "The Kid",
          text: "come on now. let's get it over with"
        }]
    }

  ]

  // Set posts to sort by 
  $scope.sortType = '-date';


  $scope.addPost = function(post) {
    $scope.post.id = $scope.posts.length + 1;
    $scope.post.date = Date.now();
    $scope.post.rating = 0;
    $scope.posts.push(post);
    $scope.post = {};
    $scope.post.comments = [];
    $scope.newPost = true;
  }

  $scope.addComment = function(comment, id) {
    var posts = $scope.posts;

    comment.date = Date.now();
    for (var i = 0; i < posts.length; i++) {
      if (posts[i].id === id) {
        posts[i].comments.push(comment);
          console.log(posts[i].comments);
      }
    }
  

    $scope.comment = {};
    $scope.newComment = true;
  }
})