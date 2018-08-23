function AlbumsNewCtrl($scope, $http, $state) {
  $scope.createAlbum = function(){
    console.log('creating a new Album', $scope.album);
    $http({
      method: 'POST',
      url: '/api/albums',
      data: $scope.album
    })// submit a HTTP rreques
      .then(()=> $state.go('albumsIndex'));

  };

}

export default AlbumsNewCtrl;
