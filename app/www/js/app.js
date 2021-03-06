// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','monospaced.qrcode'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.scan', {
      url: "/scan",
      views: {
        'menuContent' :{
          templateUrl: "templates/scan.html",
          controller: 'ScanRestaurantCtrl'
        }
      }
    })

    .state('app.nearby', {
      url: "/nearby",
      views: {
        'menuContent' :{
          templateUrl: "templates/nearby_details.html"
        }
      }
    })
    .state('app.restaurant_menu', {
      url: "/restaurant_menu",
      views: {
        'menuContent' :{
          templateUrl: "templates/restaurant_menu.php",
          controller: 'MenuCtrl'
        }
      }
    })
    .state('app.confirm', {
      url: "/confirm",
      views: {
        'menuContent' :{
          templateUrl: "templates/confirm.php"
        }
      }
    })
    .state('app.scanned', {
      url: "/scanned",
      views: {
        'menuContent' :{
          templateUrl: "templates/scanned.html"
        }
      }
    })
    .state('app.barcode', {
      url: "/barcode",
      views: {
        'menuContent' :{
          templateUrl: "templates/barcode.html"
        }
      }
    })
    .state('app.history', {
      url: "/history",
      views: {
        'menuContent' :{
          templateUrl: "templates/history.php",
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.scanned', {
      url: "/scanned",
      views: {
        'menuContent' :{
          templateUrl: "templates/scanned.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.phptest', {
      url: "/phptest",
      views: {
        'menuContent' :{
          templateUrl: "templates/phptest.php",
          controller: 'PlaylistsCtrl'
        }
      }
    })

    .state('app.history_single', {
      url: "/history/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/history_single.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/nearby');
});

