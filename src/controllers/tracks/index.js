function TracksIndexCtrl($scope, $http){
  $http({
    method: 'GET',
    url: 'api/tracks'
  })
    .then(res =>{
      $scope.tracks = res.data;
      console.log('$scope.tracks', $scope.tracks);
    });
//create a sort  func



}
export default TracksIndexCtrl;
