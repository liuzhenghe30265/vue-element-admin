<template>
  <div>
    <div class="swiper_container">
      <swiper :options="swiperOption">
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img :src="item.src" alt width="100%" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
        <div class="swiper-scrollbar" slot="scrollbar"></div>
      </swiper>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VueSwiper',
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: 2000,
        pagination: '.swiper-pagination'
      },
      swiperList: [
        {
          id: 1,
          src: 'http://dummyimage.com/393x316/1890FF/fff&text=aaa'
        },
        {
          id: 2,
          src: 'http://dummyimage.com/393x316/1890FF/fff&text=bbb'
        },
        {
          id: 3,
          src: 'http://dummyimage.com/393x316/1890FF/fff&text=ccc'
        }
      ]
    }
  }
}
</script>
