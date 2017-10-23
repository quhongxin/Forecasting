angular.module('starter.router', []).config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('app', {
			url: '/app',
			abstract: true,
			templateUrl: 'templates/menu.html',
			controller: 'AppCtrl'
		})

		.state('app.search', {
			url: '/search',
			views: {
				'menuContent': {
					templateUrl: 'templates/search.html',
					controller:'searchController'
				}
			}
		})

		.state('app.project', {
			url: '/project',
			views: {
				'menuContent': {
					templateUrl: 'templates/project.html',
					controller:'projectCtrl'
				}
			}
		})
		.state('app.playlists', {
			url: '/playlists',
			views: {
				'menuContent': {
					templateUrl: 'templates/playlists.html',
					controller: 'PlaylistsCtrl'
				}
			}
		})

		.state('app.single', {
			url: '/playlists/:playlistId',
			views: {
				'menuContent': {
					templateUrl: 'templates/playlist.html',
					controller: 'PlaylistCtrl'
				}
			}
		})
		
		.state('app.forecasting',{
			url: '/forecasting/:projectID',
			views: {
				'menuContent': {
					templateUrl: 'templates/forecasting.html',
					controller: 'forecastingController'
				}
			}
		});
	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/app/playlists');
});