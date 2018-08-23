function AuthLoginCtrl($scope, $http, $state, $auth) {
  $scope.login = function () {

    $auth.login($scope.user)
      .then(() => $state.go('albumsIndex'))
      .catch(err => console.log('there was an error', err));
  };

}

export default AuthLoginCtrl;
