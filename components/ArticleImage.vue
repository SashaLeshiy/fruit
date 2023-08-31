<template>
    <figure class="article-image">
        <img :src="props.data.src" alt="картинка" class="article-image__image" />
        <figcaption class="article-image__caption">{{ props.data?.caption }}</figcaption>
    </figure>
</template>

<script setup>
const props = defineProps({
    data: Object,
    require: true
})
</script>

<style lang="scss" scoped>
.article-image {
    padding: 0 20px;
    margin: 0;

    &__image {
        width: 100%;
        border-top-right-radius: 106px;

        @media screen and (min-width: 1024px) {
            border-top-right-radius: 180px;
        }
    }

    &__caption {
        text-align: right;
        color: #8d959c;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }
}
</style>