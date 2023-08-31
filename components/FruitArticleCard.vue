<template>
    <div class="fruit-article-card">
        <img :src="props.article.image" alt="image" class="fruit-article-card__image" />
        <h2 class="fruit-article-card__title">{{ props.article.title }}</h2>
        <NuxtLink :to="props.article.link">
            <FruitButton view="black" class="fruit-article-card__button">
                Читать
            </FruitButton>
        </NuxtLink>
    </div>
</template>

<script setup>
const props = defineProps({
    article: Object,
    require: true
})
</script>

<style lang="scss" scoped>
.fruit-article-card {
    max-width: 427px;

    &__image {
        width: 100%;
    }

    &__title {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        max-height: 56px;
    }

    &__button {
        min-width: 164px;
    }
}
</style>