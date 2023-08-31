<template>
    <div class="article-slider">
        <swiper
            :slides-per-view="1"
            :modules="modules"
            :navigation="true"
            :pagination="{ type: 'fraction' }"
            :auto-height="true"
        >
            <swiper-slide class="article-slider__slide" v-for="elem in props.data" :key="elem">
                <img :src="elem" alt="picture" class="article-slider__slide-img"/>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import "swiper/css/navigation"
import { Navigation, Pagination } from 'swiper/modules';

const props = defineProps({
    data: Array,
    require: true
})

const modules = [Navigation, Pagination]

</script>

<style lang="scss" scoped>
.article-slider {
    padding: 0 20px;

    &__slide {
        text-align: center;
    }

    &__slide-img {
        width: 80%;
        max-width: 1112px;
    }

    :deep(.swiper-button-prev) {
        width: 60px;
        height: 60px;
        color: #ffffff;
        background-color: #000000;

        &::after {
            font-size: 14px;
        }
    }
    :deep(.swiper-button-next) {
        width: 60px;
        height: 60px;
        color: #ffffff;
        background-color: #000000;

        &::after {
            font-size: 14px;
        }
    }

    :deep(.swiper-pagination-fraction) {
        text-align: center;
        color: #000000;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
    }
}
</style>