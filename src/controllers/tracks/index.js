function TracksIndexCtrl($scope, $http){
  $http({
    method: 'GET',
    url: 'api/tracks'
  })
    .then(res =>{
      $scope.tracks = res.data;
    });

}
export default TracksIndexCtrl;
