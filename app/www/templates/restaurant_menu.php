<ion-view title="-Restaurant Name- Menu">
  <ion-nav-buttons side="left">
    <button menu-toggle="left" class="button button-icon icon ion-navicon"></button>
    <button class="button button-clear button-positive" ng-click="send()">Next</button>
  </ion-nav-buttons>
  <ion-content class="has-header" style="background: url('img/backtest.jpg') center">
      
<div class="list">

<<<<<<< HEAD:app/www/templates/restaurant_menu.html
<div ng-repeat="category in menu">
  <div class="item item-icon-left item-divider">
    <i class="icon ion-coffee"></i>
      {{category.name}}
=======
  <div class="item item-icon-left item-divider" >
    <i class="icon ion-fork"></i>
    Appetizers
>>>>>>> 0e2ec063f1b72ba572576b07357d6cfc9778444c:app/www/templates/restaurant_menu.php
  </div>

    <div class="item" ng-repeat="item in category.items">
        <div class="row">
            <div class="col" name="food_pic"> 
                <img src="">
            </div>
            <div class="col" name="food_name"> 
                {{item.name}}
            </div>
            <div class="col" name="food_price">
                {{item.price}}
            </div>
            <div class="col col-15" name="food_qunty">
                <label><input value="0" type="number" ng-model="item.amount"></label>
                <!--<input type="hidden" value="{{item.id}}" ng-model="order.items[id]">-->
            </div>
            <div class="col col-10" name="food_flag">
                <a class="button button-icon icon ion-ios7-star-outline"></a>
            </div>
        </div>
    </div>
</div>

      
<div class="list">

  <div class="item item-icon-left item-divider">
    <i class="icon ion-knife"></i>
    Entrees
  </div>

    <div class="item">
        <div class="row">
            <div class="col" name="food_pic"> 
                <img src="">
            </div>
            <div class="col" name="food_name"> 
                Sample food name
            </div>
            <div class="col" name="food_price">
                Sample Food Price
            </div>
            <div class="col col-15" name="food_qunty">
                <label> <input type="number"></label>
            </div>
            <div class="col col-10" name="food_flag">
                <a class="button button-icon icon ion-ios7-star-outline"></a>
            </div>
        </div>
    </div>
    
</div>
      
<div class="list">
    <div class="item item-icon-left item-divider">
        <i class="icon ion-icecream"></i>
        Desserts
    </div>

    <div class="item">
        <div class="row">
            <div class="col" name="food_pic"> 
                <img src="">
            </div>
            <div class="col" name="food_name"> 
                Sample food name
            </div>
            <div class="col" name="food_price">
                Sample Food Price
            </div>
            <div class="col col-15" name="food_qunty">
                <label> <input type="number"></label>
            </div>
            <div class="col col-10" name="food_flag">
                <a class="button button-icon icon ion-ios7-star-outline"></a>
            </div>
        </div>
    </div>

<button class="button button-full button-calm">
  Place Order
</button>

    
</div>
  </ion-content>
</ion-view>
