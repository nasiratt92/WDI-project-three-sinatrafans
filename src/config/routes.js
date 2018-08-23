
function Router($stateProvider, $urlRouterProvider){

  function secureState($q, $auth, $state, $rootScope){
    return new $q(resolve => {
      if($auth.isAuthenticated()) return resolve();
      //Assume users not logged in
      //Create a flash message!
      $rootScope.$broadcast('flashMessage', {
        type: 'warning',
        content: 'You must be logged in to access the page'
      });
      $state.go('login');
    });
  }


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
      controller: 'AlbumsIndexCtrl', //optional
      resolve: {secureState}
    })
    .state('albumsNew', {
      templateUrl: './views/albums/new.html',
      url: '/albums/new',
      controller: 'AlbumsNewCtrl' //optional
    })
    .state('albumsEdit', {
      templateUrl: './views/albums/edit.html',
      url: '/albums/:id/edit', //optional - id is parameter of state
      controller: 'AlbumsEditCtrl' //optional
    })
    .state('albumsShow', {
      templateUrl: './views/albums/show.html',
      url: '/albums/:id',
      controller: 'AlbumsShowCtrl' //optional
    })
    .state('login', {
      templateUrl: './views/auth/login.html',
      url: '/login', //optional - id is parameter of state
      controller: 'AuthLoginCtrl' //optional
    })
    .state('register', {
      templateUrl: './views/auth/register.html',
      url: '/register', //optional - id is parameter of state
      controller: 'AuthRegisterCtrl' //optional
    })
    .state('tracksIndex', {
      templateUrl: './views/tracks/index.html',
      url: '/tracks', //optional
      controller: 'TracksIndexCtrl' //optional
    })
    .state('tracksNew', {
      templateUrl: './views/tracks/new.html',
      url: '/albums/:albumId/tracks/new', //optional
      controller: 'TracksNewCtrl' //optional
    })
    .state('concertsIndex', {
      templateUrl: './views/concerts/index.html',
      url: '/concerts', //optional
      controller: 'ConcertsIndexCtrl' //optional
    });



  $urlRouterProvider.otherwise('/');
}

export default Router;
