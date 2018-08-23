function MainCtrl($auth, $scope, $state, $rootScope, $timeout) {
//isAuthenticated is a func and needs to be invoked
  $scope.isAuthenticated =   $auth.isAuthenticated; //now availible in every view and controller
  $rootScope.$on('flashMessage', (e, data) => {
    // console.log('e is',e, 'data is',data);
    $scope.flashMessage = data;
    // $rootScope.$on('$stateChangeSuccess', function() {
    //   $scope.flashMessage = null;
    // });
    $timeout(() => $scope.flashMessage = null, 4000);
  });
  $scope.logout = function(){
    $auth.logout();
    $state.go('home');
  };
}
export default MainCtrl;
