// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','starter.router','starter.searchCtrl','starter.searchService','starter.forecastingCtrl','starter.projectCtrl','baseService','pascalprecht.translate'])

.config(function($stateProvider,$translateProvider){
		var translationEN={

			Language_en: 'english',
			
			Language_zh: 'chinese'
			
			};
			
			var translationZH={
			
			Language_en: '英文',
			
			Language_zh: '中文'
			
			};
		$translateProvider.translations('en',translationEN);
		
		$translateProvider.translations('zh',translationZH);
		
		$translateProvider.preferredLanguage('en');
		
		$translateProvider.fallbackLanguage('en');
		
	})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
      var isIPad = ionic.Platform.isIPad();
		  var isIOS = ionic.Platform.isIOS();
		  var isAndroid = ionic.Platform.isAndroid();
		  var isWindowsPhone = ionic.Platform.isWindowsPhone();
    if(isAndroid || isIPad || isIOS || isWindowsPhone){
    	isBrowser = false;
    }else{
    	isBrowser = true;
    }
  });
});


