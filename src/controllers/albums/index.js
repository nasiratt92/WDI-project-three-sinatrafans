function AlbumsIndexCtrl($scope, $http){
  $http({
    method: 'GET',
    url: 'api/albums'
  })
    .then(res =>{
      $scope.albums = res.data;
    });
  // 
  // $http({
  //   method: 'GET',
  //   url: 'https://itunes.apple.com/lookup?id=171366&entity=album'
  // })
  //   .then(res => {
  //     console.log('Result of iTunes search was', res);
  //     $scope.results = res.data.results;
  //   });

}
export default AlbumsIndexCtrl;
