angular.module('app.controllers', [])
  
.controller('pageCtrl', function($scope,$http,$ionicLoading) {

    $scope.buscar = {
        nombre: '',
		ciudad: ''
    };

    $scope.page = {};
    $scope.productos = {};

    $scope.getClima = function (example) {

$scope.show($ionicLoading);
	$http({
		method: 'GET',
		url: 'https://8kdx6rx8h4.execute-api.us-east-1.amazonaws.com/prod/productos?string='+$scope.buscar.nombre+'&lat=-31.42008329999999&lng=-64.18877609999998&offset=0&limit=10'
	}).then(function successCallback(response) {

		$scope.productos=  response.data.productos;
		$scope.hide($ionicLoading);

	}, function errorCallback(response) {
		alert("error");
		$scope.hide($ionicLoading);
	});
	};
	
	$scope.show = function() {
	    $ionicLoading.show({
	      template: '<p>Loading...</p><ion-spinner></ion-spinner>'
	    });
	  };
	  
	   $scope.hide = function(){
	        $ionicLoading.hide();
	  };
	  
	      $scope.verComercios = function (example) {
			  
		  }

})

.controller('page2Ctrl', function($scope,$http,$ionicLoading) {
	$scope.show = function() {
$ionicLoading.show({
  template: '<p>Loading...</p><ion-spinner></ion-spinner>'
});
};

$scope.hide = function(){
	$ionicLoading.hide();
};
    $scope.sucursales = {};
$scope.show($ionicLoading);
	$http({
		method: 'GET',
		url: 'https://8kdx6rx8h4.execute-api.us-east-1.amazonaws.com/prod/producto?limit=30&id_producto=7790139002886&lat=-31.42008329999999&lng=-64.18877609999998'
	}).then(function successCallback(response) {

		$scope.sucursales=  response.data.sucursales;
		$scope.hide($ionicLoading);

	}, function errorCallback(response) {
		alert("error");
		$scope.hide($ionicLoading);
	});

	$scope.hide($ionicLoading);
	
	
});
 