angular.module('starter.searchController',[])
.controller('searchController',function($scope,searchService){
	/**
	 * 显示search
	 */
	searchService.getSearchList().then(function(data){
		$scope.searchList = data.result;
	},function(error){
		
	});
	
	/**
	 * 上拉刷新
	 */
	
	$scope.doRefresh = function(){
		console.log("上拉刷新");
		$scope.$broadcast('scroll.refreshComplete');
	}
	
	/**
	 * 加载更多
	 */
	$scope.loadMore = function(){
		console.log("加载更多");
		 searchService.getSearchList().then(function(data){
			$scope.searchList = $scope.searchList.concat(data.result);
		},function(error){
			
		});
		 $scope.$broadcast('scroll.infiniteScrollComplete');
	}
	
	/**
	 * 跳转到forecasting
	 */
	$scope.goForecasting = function(){
		
	}
})