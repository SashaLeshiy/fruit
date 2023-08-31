<template>
    <div class="article-list">
        <h2 class="article-list__title">
            {{ props.data.title }}
        </h2>
            <div class="article-list__articles">
                <FruitArticleCard
                    v-for="article in props.data.articles"
                    :key="article.title"
                    :article="article"
                />
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
.article-list {
    padding: 0 20px;

    &__title {
        margin-top: 38px;
    }
    &__articles {
        display: grid;
        justify-content: center;
        grid-gap: 20px;

        @media screen and (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }

        @media screen and (min-width: 1024px) {
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
}
</style>