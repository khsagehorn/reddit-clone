
  var app = angular.module('redditClone', []);

app.controller('PostsController', function($scope){
  $scope.posts = [
    {
      id:1,
      title: 'Killer Tofu',
      author: 'Doug Funny',
      date: Date.now(),    
      image: "http://www.finecooking.com/CMS/uploadedImages/Images/Cooking/Articles/Issues_61-70/fc65be071-01_xlg.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
      rating: 0,
      comments: [
        {
          user: 'Roger',
          date: Date.now(),
          text: 'OP is a dorkus.'
        },
        {
          user: 'Patty Mayonaise',
          date: Date.now(),
          text: 'Cut it out, Roger'
        }]
    },

    {
      id:2,
      title: 'Yes, but Why?',
      author: 'Arnold',
      date: Date.now(),
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Florida_Box_Turtle_Digon3a.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 3,
      comments: []
    },
    
    {
      id:3,
      title: 'Et in America, ego',
      author: 'The Judge',
      date: Date.now(),
      image: "http://weknowyourdreamz.com/images/desert/desert-04.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 9,
      comments: [
        {
          date: Date.now(),
          user: "The Kid",
          text: "come on now. let's get it over with"
        }]
    }

  ]

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

  $scope.addComment = function(comment, post_id) {
    var id = post_id;
    comment.date = Date.now();
    $scope.posts[id].comments.push(comment);
    $scope.newComment = true;
    console.log(comment);
    console.log(comment);
  }
})