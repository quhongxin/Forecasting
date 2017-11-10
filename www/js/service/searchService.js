angular.module('starter.searchService',[])
.factory('searchService',function($q){
	return{
		getSearchList:function(){
			var referred = $q.defer();
			var searchList = getSearchList();
			referred.resolve(searchList);
			return referred.promise;
		},
		getProjectInfo: function(){
			var referred = $q.defer();
			var projectInfo = getDownloadProjectInfo();
			referred.resolve(projectInfo);
			return referred.promise;
		}
	}
	
})