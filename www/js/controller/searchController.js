angular.module('starter.searchController',[])
.controller('searchController',function($scope,searchService,$filter){
	
	$scope.$on('$ionicView.beforeEnter', function() {
		
		});
		
	/**
	 * 获取搜索条件
	 */
    $scope.searchTypeList = getSearchTypeList();
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
	 * 搜索本地项目
	 */
	$scope.searchProject = function(e){
		var keycode = window.event?e.keyCode:e.which;
		if(keycode==13){
                console.log($scope.searchValue);
                console.log($scope.selectType.Type);
            }
	}
	

	
})