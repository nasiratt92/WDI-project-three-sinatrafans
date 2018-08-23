function TracksNewCtrl($scope, $http, $state) {
  $scope.createTrack = function(){
    console.log('creating a new one', $scope.track);
    $http({
      method: 'POST',
      url: '/api/tracks',
      data: $scope.track
    })// submit a HTTP rreques
      .then(()=> $state.go('tracksIndex'));

  };

}

export default TracksNewCtrl;
