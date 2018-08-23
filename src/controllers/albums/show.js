function AlbumsShowCtrl($scope, $http, $state) {

  $http({
    method: 'GET',
    url: `/api/albums/${$state.params.id}`
  })
    .then(res => {
      $scope.album = res.data;
    });

  $scope.deleteAlbum = function(){
    $http({
      method: 'DELETE',
      url: `/api/albums/${$state.params.id}`
    })
      .then(() => $state.go('albumsIndex'));
  };

  $http({
    method: 'GET',
    url: `/api/albums/${$state.params.id}/tracks`
  })
    .then(res => {
      $scope.tracksAvailable = res.data;
    });
}




export default AlbumsShowCtrl;
