
function Router($stateProvider, $urlRouterProvider){



  $stateProvider
    .state('about', {
      templateUrl: './views/about.html',
      url: '/about'
    })
    .state('home', {
      templateUrl: './views/home.html',
      url: '/'
    })
    .state('albumsIndex', {
      templateUrl: './views/albums/index.html',
      url: '/albums', //optional
      controller: 'AlbumsIndexCtrl' //optional
    })
    .state('tracksIndex', {
      templateUrl: './views/tracks/index.html',
      url: '/tracks', //optional
      controller: 'TracksIndexCtrl' //optional
    });



  $urlRouterProvider.otherwise('/');
}

export default Router;
