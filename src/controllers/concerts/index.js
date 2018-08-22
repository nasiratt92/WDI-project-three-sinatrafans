function ConcertsIndexCtrl($scope, $http){
  $http({
    method: 'GET',
    url: 'api/concerts'
  })
    .then(res =>{
      $scope.concerts = res.data;
      console.log('this is the res. data', res.data);
    });

}
export default ConcertsIndexCtrl;
