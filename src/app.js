import angular from 'angular';
import '@uirouter/angularjs';
import './scss/style.scss';
import 'satellizer';
import 'angular-messages';
import 'bulma';

//router
import Router from './config/routes';

//custom directives
import ngSoundcloud from './directives/ngSoundcloud';
// import Map from './directives/map';

//controllers
import MainCtrl from './controllers/main';
import AlbumsIndexCtrl from './controllers/albums/index';
import TracksIndexCtrl from './controllers/tracks/index';
import ConcertsIndexCtrl from './controllers/concerts/index';
import TracksNewCtrl from './controllers/tracks/new';
// import AlbumsNewCtrl from './controllers/albums/new';
// import AlbumsShowCtrl from './controllers/albums/show';
// import AlbumsEditCtrl from './controllers/albums/edit';
// import AuthLoginCtrl from './controllers/auth/login';
// import AuthRegisterCtrl from './controllers/auth/register';

angular.module('SinatraFans', [
  'ui.router', 'satellizer', 'ngMessages'
])

// [] = would mean no dependencies
  // .directive('ngMap', Map)
  .directive('ngSoundcloud', ngSoundcloud)
  .controller('MainCtrl',MainCtrl )
  .controller('AlbumsIndexCtrl',AlbumsIndexCtrl )
  .controller('TracksIndexCtrl',TracksIndexCtrl )
  .controller('ConcertsIndexCtrl',ConcertsIndexCtrl )
  .controller('TracksNewCtrl',TracksNewCtrl )
  // .controller('AlbumsNewCtrl',AlbumsNewCtrl )
  // .controller('AlbumsShowCtrl',AlbumsShowCtrl )
  // .controller('AlbumsEditCtrl',AlbumsEditCtrl )
  // .controller('AuthLoginCtrl',AuthLoginCtrl )//ahead
  // .controller('AuthRegisterCtrl',AuthRegisterCtrl )//ahead

  .config(Router)
  .config(function($authProvider) {
    $authProvider.loginUrl = '/api/login';
    $authProvider.signupUrl = '/api/register';

  });
