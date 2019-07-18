import React from 'react';
import {Swiper,SwiperSlide,Page} from 'framework7-react';

export default() => (
    <Page>
      <Swiper navigation>
        <SwiperSlide><img src="/images/shop-grocery.jpg"/></SwiperSlide>
        <SwiperSlide><img src="/images/shop-grocery.jpg"/></SwiperSlide>
      <SwiperSlide><img src="/images/shop-grocery.jpg"/></SwiperSlide>
      </Swiper>
    </Page>
);