
  var app = angular.module('redditClone', []);

app.controller('PostsController', function($scope){
  $scope.posts = [
    {
      id:1,
      title: 'Killer Tofu',
      author: 'Doug Funny',
      date: '3-24-2016',    
      image: "http://www.finecooking.com/CMS/uploadedImages/Images/Cooking/Articles/Issues_61-70/fc65be071-01_xlg.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
      rating: 0,
      comments: [
        {
          user: 'Roger',
          text: 'OP is a dorkus.'
        }]
    },

    {
      id:2,
      title: 'Yes, but Why?',
      author: 'Arnold',
      date: '3-24-2016',
      image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Florida_Box_Turtle_Digon3a.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 3,
      comments: []
    },
    
    {
      id:3,
      title: 'Et in America, ego',
      author: 'The Judge',
      date: '3-29-2016',
      image: "http://weknowyourdreamz.com/images/desert/desert-04.jpg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 9,
      comments: [
        {
          user: "The Kid",
          text: "come on now. let's get it over with"
        }]
    }

  ]


  $scope.newPost = function(post) {
    $scope.post.date = Date.now();
    $scope.post.rating = 0;
    $scope.posts.push(post);
    $scope.post = {};
  }
})