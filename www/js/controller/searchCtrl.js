angular.module('starter.searchCtrl', [])
	.controller('searchCtrl', function($scope, searchService, $filter,httpService) {

		$scope.$on('$ionicView.beforeEnter', function() {
			/**
			 * 显示search
			 */
			searchService.getSearchList().then(function(data) {
				$scope.searchList = data.result;
			}, function(error) {

			});
		});
		/**
		 * 获取搜索条件
		 */
		$scope.searchTypeList = getSearchTypeList();
		/**
		 * 上拉刷新
		 */

		$scope.doRefresh = function() {
			console.log("上拉刷新");
			$scope.$broadcast('scroll.refreshComplete');
		}

		/**
		 * 加载更多
		 */
		$scope.loadMore = function() {
			console.log("加载更多");
			searchService.getSearchList().then(function(data) {
				$scope.searchList = $scope.searchList.concat(data.result);
			}, function(error) {

			});
			$scope.$broadcast('scroll.infiniteScrollComplete');
		}

		/**
		 * 搜索本地项目
		 */
		$scope.searchProject = function(e) {
			var keycode = window.event ? e.keyCode : e.which;
			if(keycode == 13) {
				if($scope.searchValue) {
					var expression = {};
					if($scope.selectType.Type === "ProjectName") {
						expression.ProjectName = $scope.searchValue;
					} else if($scope.selectType.Type === "FieldWBSNo") {
						expression.FieldWBSNo = $scope.searchValue;
					} else {
						expression.ViewID = $scope.searchValue;
					}
					searchService.getSearchList().then(function(data) {
						$scope.searchList = $filter('filter')(data.result, expression);
					}, function(error) {

					});
					var params = {
						identifier: angular.toJson({
						UserID: Global.UserID,
						User8ID: Global.User8ID,
						Token: Global.Token,
						LanguageCode: Global.LanguageCode,
						ProjectName: $scope.selectType.Type === 'ProjectName' ? $scope.searchValue : '',
						FieldWBSNo: $scope.selectType.Type === 'FieldWBSNo' ? $scope.searchValue : '',
						ViewID: $scope.selectType.Type === 'ViewID' ? $scope.searchValue : '',
						CurrentPage: 1,
						PageSize: 15
						})
					}
					console.log(params);
					var url = Global.Domain + "/sharp/niapp/forecasting/search";
					httpService.httpPost(url,params).then(function(res){
						console.log(res);
					},function(error){
						
					});
				} else {
					searchService.getSearchList().then(function(data) {
						$scope.searchList = data.result;
					}, function(error) {

					});
				}

			}
		}

	})