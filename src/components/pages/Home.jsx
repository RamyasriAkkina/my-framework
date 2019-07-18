import React from 'react';
import './Home.css';
import './swip.css';
import {Swiper,SwiperSlide} from 'framework7-react';


export default () => (
    <div class="page page-clr">
      {/* top toolbar    */}
        <div class="toolbar toolbar-top toolbar-height">
        <div class="toolbar-inner">
            <div class="flex-container">
                <div class="flex top1">
                    <div class="flex-top">
                        <i class="f7-icons top-i">placemark_fill</i>
                        <div class="top-inner">
                            <p class="inner-p1">Delivery To </p>
                            <div class="icon">
                                <p class="inner-p2">1095,Marathahalli -<sub>...</sub></p>
                                <i class="material-icons-outlined">keyboard_arrow_down</i>
                            </div>
                        </div>              
                    </div>
                </div>
                <div class="flex top2">
                    <div class="flex-top"><i class="material-icons-outlined top-i">perm_identity</i></div>
                </div>
            </div>
        </div>
        </div>
        {/* bottom toolbar */}
        <div class="toolbar toolbar-bottom toolbar-height">
        <div class="toolbar-inner">
        <div class="flex-container">
                <div class="flex">
                    <div class="flex-div1"><i class="material-icons-outlined">home</i></div>
                   <div class="flex-div2">Home</div> 
                 </div>
                <div class="flex">
                   <div class="flex-div1"><i class="material-icons-outlined">search</i></div>
                   <div class="flex-div2">Search</div>   
                </div>
                <div class="flex">
                   <div class="flex-div1"><i class="f7-icons">bag</i></div>
                   <div class="flex-div2">Order</div>   
                </div>
                <div class="flex">
                   <div class="flex-div1"><i class="material-icons-outlined">account_balance_wallet</i></div>
                   <div class="flex-div2">Dunzo Cash</div>
                </div>
            </div>
        </div>
        </div>
       {/* page content */}
        <div class="page-content">
        <Swiper navigation>
            <SwiperSlide><img src="/images/shop-grocery.jpg"/></SwiperSlide>
            <SwiperSlide><img src="/images/shop-grocery.jpg"/></SwiperSlide>
            <SwiperSlide><img src="/images/shop-grocery.jpg"/></SwiperSlide>
        </Swiper>
        {/* cards start here */}
        <div class="block-title titl">What would you like to do today?</div>
        <div class="block">
        <div class="row no-gap">
            <div class="col">
                <div class="card1"><p>20% off</p></div>
                <div class="card2"><img src="/images/restaurents.jpg"/></div>
                <div class="card3"><p>Restaurents</p></div>
            </div>
            <div class="col">
                <div class="card1"></div>
                <div class="card2"><img src="/images/daily-grocery.png"/></div>
                <div class="card3"><p>Daily Grocery</p></div>
            </div>
            <div class="col">
                <div class="card1"></div>
                <div class="card2"><img src="/images/medicines.jpg"/></div>
                <div class="card3"><p>Medicine</p></div>
            </div>
            <div class="col">
                <div class="card1"><p>20% off</p></div>
                <div class="card2"><img src="/images/fruitsvegies.png"/></div>
                <div class="card3"><p>Fruits and Vegetables</p></div>
            </div>
        </div>
        <div class="row no-gap">
            <div class="col">
                <div class="card1"></div>
                <div class="card2"><img src="/images/send-package.jpg"/></div>
                <div class="card3"><p>Send Packages</p></div>
            </div>
            <div class="col">
                <div class="card1"></div>
                <div class="card2"><img src="/images/meatandfish.jpg"/></div>
                <div class="card3"><p>Meat and Fish</p></div>
            </div>
            <div class="col">
                <div class="card1"></div>
                <div class="card2"><img src="/images/pet.jpg"/></div>
                <div class="card3"><p>Pet Supplies</p></div>
            </div>
            <div class="col">
                <div class="card1"></div>
                <div class="card2"><img src="/images/store.jpg"/></div>
                <div class="card3"><p>Other Stores</p></div>
            </div>
        </div>    
        </div>           
    </div>
    </div>
);

