function ConcertsIndexCtrl($scope, $http){
  $http({
    method: 'GET',
    url: 'api/concerts'
  })
    .then(res =>{
      $scope.concerts = res.data;
    });

}
export default ConcertsIndexCtrl;
