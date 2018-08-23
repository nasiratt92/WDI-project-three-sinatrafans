function RegisterCtrl($scope, $auth, $state) {
  $scope.register = function () {
    console.log('trying to sign up');
    $auth
      .signup($scope.user)
      .then(() => $state.go('login'));
  };
}

export default RegisterCtrl;
