<template>
    <main class="fruit-main">
        <div class="fruit-main__container">
            <div v-if="articles.length > 0" class="fruit-main__articles">
                <FruitArticleCard
                    v-for="article in articles"
                    :key="article.title"
                    :article="article"
                />
            </div>
        </div>
    </main>
</template>

<script setup>
const config = useRuntimeConfig()

const articles = ref([])

const { data, error } = await useFetch(config.public.apiBase+'/')

articles.value = data._value.body[0].data.articles

useHead({
  title: data._value.meta.title,
  meta: [
    { description: data._value.meta.description }
  ]
})

</script>

<style lang="scss" scoped>
.fruit-main {
    min-height: calc(100dvh - 385px);

    &__container {
        padding: 20px;
        margin: 0 auto;
        max-width: 1340px;
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