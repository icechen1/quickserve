 Skip to content
This repository

    Explore
    Gist
    Blog
    Help

    Celestimon Celestimon

    4
    0
    0

icechen1/quickserve

quickserve / app / www / templates / restaurant_menu.html
Yu Chen Hou icechen1 3 hours ago
test

2 contributors
Celestimon Yu Chen Hou
97 lines (85 sloc) 2.925 kb

<ion-view title="-Restaurant Name- Menu" >

    <ion-nav-buttons side="left" >

        <button
            class="button button-icon icon ion-navicon"
            menu-toggle="left" >
        </button>

    </ion-nav-buttons>

    <ion-content class="has-header" >

        <div class="list" >

            <div ng-repeat="category in menu" >

                <div class="item item-icon-left item-divider" >

                    <i class="icon ion-coffee" >
                    </i>
                    {{category.name}}

                </div>

                <div
                    class="item"
                    ng-repeat="item in category.items" >

                    <div class="row" >

                        <div
                            name="food_pic"
                            class="col col-10" >

                            <img src="" >
                            </img>
                        </div>

                        <div
                            name="food_name"
                            class="col col-50" >
                            {{item.name}}

                        </div>

                        <div
                            name="food_price"
                            class="col" >
                            {{item.price}}

                        </div>

                        <div
                            name="food_qunty"
                            class="col col-10"
                            align="center">

                            <label>

                                <input
                                    ng-model="item.amount"
                                    type="number"
                                    value="0" >
                                </input>
                            </label>
                            <!-- <input type="hidden" value="{{item.id}}" ng-model="order.items[id]"> -->
                        </div>

                        <div
                            name="food_flag"
                            class="col col-10" >

                            <a class="button button-icon icon ion-ios7-star-outline" >
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="list" >

                <div class="item item-icon-left item-divider" >

                    <i class="icon ion-knife" >
                    </i>
                    Entrees

                </div>

                <div class="item" >

                    <div class="row" >

                        <div
                            name="food_pic"
                            class="col" >

                            <img src="" >
                            </img>
                        </div>

                        <div
                            name="food_name"
                            class="col" >
                            Sample food name

                        </div>

                        <div
                            name="food_price"
                            class="col" >
                            Sample Food Price

                        </div>

                        <div
                            name="food_qunty"
                            class="col col-15" >

                            <label>

                                <input type="number" >
                                </input>
                            </label>
                        </div>

                        <div
                            name="food_flag"
                            class="col col-10" >

                            <a class="button button-icon icon ion-ios7-star-outline" >
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="list" >

                <div class="item item-icon-left item-divider" >

                    <i class="icon ion-icecream" >
                    </i>
                    Desserts

                </div>

                <div class="item" >

                    <div class="row" >

                        <div
                            name="food_pic"
                            class="col" >

                            <img src="" >
                            </img>
                        </div>

                        <div
                            name="food_name"
                            class="col" >
                            Sample food name

                        </div>

                        <div
                            name="food_price"
                            class="col" >
                            Sample Food Price

                        </div>

                        <div
                            name="food_qunty"
                            class="col col-15" >

                            <label>

                                <input type="number" >
                                </input>
                            </label>
                        </div>

                        <div
                            name="food_flag"
                            class="col col-10" >

                            <a class="button button-icon icon ion-ios7-star-outline" >
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ion-content>

</ion-view>    Status
    API
    Training
    Shop
    Blog
    About

    © 2014 GitHub, Inc.
    Terms
    Privacy
    Security
    Contact

