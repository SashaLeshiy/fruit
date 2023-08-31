<template>
    <div class="article-intro">
        <img :src="props.data.image" alt="picture" class="article-intro__image" />
        <div class="article-intro__content">
            <h1 class="article-intro__title">{{ props.data.title }}</h1>
            <div class="article-intro__data">
                <img src="@/assets/icons/time_icon.svg" class="article-intro__data-icon"/>
                <span class="article-intro__data-text">{{ props.data.reading_time }} мин время чтения</span>
            </div>
            <div class="article-intro__data">
                <img src="@/assets/icons/eye_icon.svg" class="article-intro__data-icon" />
                <span class="article-intro__data-text">{{ props.data.views_count }} прочитали статью</span>
            </div>
            <p class="article-intro__description">
                {{ props.data.short_description }}
            </p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object,
    require: true
})

</script>

<style lang="scss" scoped>
.article-intro {
    display: grid;
    justify-items: center;
    padding: 0 20px;

    @media screen and (min-width: 1024px) {
        grid-template-columns: 40% 1fr;
        grid-gap: 20px;
    }

    @media screen and (min-width: 1200px) {
        grid-gap: 40px;
    }

    &__image {
        width: 100%;
        max-width: 540px;
        border-top-right-radius: 106px;

        @media screen and (min-width: 1024px) {
            border-top-right-radius: 180px;
        }
    }

    &__title {
        color: #1b1b1b;
        font-weight: 800;
        font-size: 28px;
        line-height: 34px;

        @media screen and (min-width: 1024px) {
            font-size: 42px;
            line-height: 48px;
        }

        @media screen and (min-width: 1200px) {
            font-size: 50px;
            line-height: 56px;
        }

        @media screen and (min-width: 1340px) {
            font-size: 56px;
            line-height: 66px;
        }
    }

    &__data {
        display: flex;
        align-items: center;
    }

    &__data-icon {
        margin-right: 8px;
    }

    &__data-text {
        color: #8d959c;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }

    &__description {
        color: #1b1b1b;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
    }
}
</style>