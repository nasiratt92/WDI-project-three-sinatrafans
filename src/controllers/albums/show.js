function AlbumsShowCtrl($scope, $http, $state) {
  $scope.deleteAlbum = function(){
    $http({
      method: 'DELETE',
      url: `/api/albums/${$state.params.id}`
    })
      .then(() => $state.go('albumsIndex'));
  };
}




export default AlbumsShowCtrl;
