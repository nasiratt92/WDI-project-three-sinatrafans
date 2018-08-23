function AlbumsEditCtrl($scope, $http, $state){
  $scope.updateAlbum = function(){
    $http({
      method: 'PUT',
      url: `/api/albums/${$state.params.id}`,
      data: $scope.album
    })
      .then(() => $state.go('albumsShow', {id: $state.params.id}));
  };
  $http({
    method: 'GET',
    url: `/api/albums/${$state.params.id}`
  })
    .then(res => $scope.album = res.data);
}

export default AlbumsEditCtrl;
