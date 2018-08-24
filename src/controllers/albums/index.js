function AlbumsIndexCtrl($scope, $http){
  $http({
    method: 'GET',
    url: 'api/albums'
  })
    .then(res =>{
      $scope.albums = res.data;
    });

  $http({
    method: 'GET',
    url: '/api/itunes'
  })
    .then(res => {
      // We only want 'collections' (i.e. albums), not artists or anything else
      $scope.itunes = res.data.filter(listItem => listItem.wrapperType === 'collection');
    });

}
export default AlbumsIndexCtrl;
