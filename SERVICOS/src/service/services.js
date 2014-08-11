angular.module('services', [])
	.factory('FuncionarioService', function($resource){
	
		return $resource('/funcionarios/:id');

});