function AlbumsIndexCtrl($scope, $http){
  $http({
    method: 'GET',
    url: 'api/albums'
  })
    .then(res =>{
      $scope.albums = res.data;
    });

}
export default AlbumsIndexCtrl;
