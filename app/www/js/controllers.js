angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  //Grab our userID
  try{
    $scope.phoneID = device.uuid;
    alert($scope.phoneID);
  }catch(err){
      
  }
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

.controller('MenuCtrl', function($scope,$state,$location,$http) {
    //placeholder
    $scope.menu = [{ name: 'Category 1', 
        items:[{
            name: "Test",
            price: "160$",
            id: 123213
        },{
            name: "Test 2",
            price: "100$",
            id: 123212
        },{
            name: "Test 3",
            price: "100$",
            id: 123214
        }]
    },{name: 'Category 2', 
        items:[{
            name: "Test",
            price: "100$",
            id: 223213
        },{
            name: "Test 2",
            price: "100$",
            id: 223212
        },{
            name: "Test 3",
            price: "100$",
            id: 223210
        }]
    },{name: 'Category 3', 
        items:[{
            name: "Test",
            price: "100$",
            id: 323213
        },{
            name: "Test 2",
            price: "100$",
            id: 323216
        },{
            name: "Test 3",
            price: "100$",
            id: 323211
        }]
    }
     ];
    
    //Post the order to the server
    $scope.send = function(){
        console.log($scope.menu);
        $http.get('http://quickserve.herokuapp.com/generate_token.php', $scope.order).success(function(data, status, headers, config){
                $location.url("/barcode/"+data);
        });
    };
})
//TODO Refactor ordering into a service
.service('orderService', function() {
  var orderList = [];
    
  var addProduct = function(newObj) {
      orderList.push(newObj);
  }

  var getProducts = function(){
      return orderList;
  }

  return {
    addProduct: addProduct,
    getProducts: getProducts
  };

});
