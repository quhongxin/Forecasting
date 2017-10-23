angular.module('baseService',[])
.factory('httpService',function($q){
	return {
		httpPost: function(url,param){
			var req = {
				method: 'POST',
				headers: {'Content-Type': 'application/x-www-form-urlencoded'},
				data: param,
				timeout: 60000
			};
			var deferred = $q.defer();
			$http(req).then(function(response){
				if(response.data.error_code == 0){
					deferred.resolve(response);
				}else if(response.data.error_code == 5){
					
				}else{
					
				}
			},function(error){
				deferred.reject(error);
			});
			return deferred.promise;
		}
	}
})