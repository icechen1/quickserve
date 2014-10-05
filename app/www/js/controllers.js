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
    //
    $scope.menu = [{ name: 'Breakfast', 
        items:[{
            name: "Egg & Cheese	3-inch Flatbread",
            price: "$2.25",
            id: 123213
        },{
            name: "Egg & Cheese	6-inch Flatbread or Subs",
            price: "$3.50",
            id: 123212
        },{
            name: "Egg & Cheese	12-inch Flatbread or Subs",
            price: "$5.00",
            id: 123214
        },{
            name: "Black Forrest Ham, Egg & Cheese	6-inch Flatbread or Subs",
            price: "$3.75",
            id: 123215,
        },{
            name: "Bacon, Egg & Cheese	6-inch Flatbread or Subs",
            price: "$3.75",
            id: 123215,
        },{
            name: "Steak, Egg & Cheese	6-inch Flatbread or Subs	",
            price: "$4.00",
            id: 123215,
        },{
            name: "Sausage, Egg & Cheese	6-inch Flatbread or Subs	",
            price: "$4.00",
            id: 123215,
        }]
    },{name: 'Chopped Salads', 
        items:[{
            name: "Double Chicken",
            price: "$7.00",
            id: 223213
        },{
            name: "Turkey Breast",
            price: "$6.00",
            id: 223212
        },{
            name: "Veggie Delite",
            price: "$5.00",
            id: 223210
        }]
    },{name: 'Footlongs', 
        items:[{
            name: "B.L.T.",
            price: "$5.00",
            id: 323213
        },{
            name: "Black Forest Ham",
            price: "$5.25",
            id: 323216
        },{
            name: "Cold Cut Combo",
            price: "$5.25",
            id: 323211
        },{
            name: "Egg & Cheese Omelet",
            price: "$5.00",
            id: 323211
        },{
            name: "Veggie Delite",
            price: "$5.00",
            id: 323211
        },{
            name: "Spicy Italian",
            price: "$5.75",
            id: 323211
        },{
            name: "Meatball Marinara",
            price: "$6.25",
            id: 323211
        },{
            name: "Oven Roasted Chicken",
            price: "$6.00",
            id: 323211
        },{
            name: "Subway Seafood Sensation",
            price: "$6.00",
            id: 323211
        },{
            name: "Tuna",
            price: "$6.50",
            id: 323211
        },{
            name: "Buffalo Chicken",
            price: "$7.25",
            id: 323211
        },{
            name: "Sweet Onion Chicken Teriyaki",
            price: "$7.25",
            id: 323211
        },{
            name: "Chicken & Bacon Ranch Melt",
            price: "$7.50",
            id: 323211
        }]
    },{name: '6-inch', 
        items:[{
            name: "B.L.T.",
            price: "$3.50",
            id: 323213
        },{
            name: "Black Forest Ham",
            price: "$3.50",
            id: 323216
        },{
            name: "Cold Cut Combo",
            price: "$3.50",
            id: 323211
        },{
            name: "Egg & Cheese Omelet",
            price: "$3.50",
            id: 323211
        },{
            name: "Veggie Delite",
            price: "$3.50",
            id: 323211
        },{
            name: "Spicy Italian",
            price: "$3.75",
            id: 323211
        },{
            name: "Meatball Marinara",
            price: "$4.00",
            id: 323211
        },{
            name: "Oven Roasted Chicken",
            price: "$4.00",
            id: 323211
        },{
            name: "Subway Seafood Sensation",
            price: "$4.00",
            id: 323211
        },{
            name: "Tuna",
            price: "$4.25",
            id: 323211
        },{
            name: "Buffalo Chicken",
            price: "$4s.50",
            id: 323211
        },{
            name: "Sweet Onion Chicken Teriyaki",
            price: "$4.50",
            id: 323211
        },{
            name: "Chicken & Bacon Ranch Melt",
            price: "$4.75",
            id: 323211
        }]
    }];
    
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
