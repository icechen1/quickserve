angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  //Grab our userID
    window.MacAddress.getMacAddress(
        function(macAddress) {
            $scope.phone_id = macAddress;
            alert(phone_id);
        },function(fail) {
            $scope.phone_id = -1;
        }
    );
    
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/scan.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.scanModal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.scanModal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.scanModal.show();
  };

  $scope.scan = function(){
    //Scan QR Code to get to restaurant page
    cordova.plugins.barcodeScanner.scan(
      function (result) {
          //QR Code found... check for validity
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      }, 
      function (error) {
          alert("Scanning failed: " + error);
      }
    );
    };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('ScanRestaurantCtrl', function($scope,$state) {

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
