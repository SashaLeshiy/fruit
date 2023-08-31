<template>
    <div v-if="blocks" class="article-detail">
        <div v-for="block in blocks" class="article-detail__block">
            <Component :is="component(block)" :data="block.data"/>
        </div>
    </div>
    <div v-else class="">
        <h2>Нет контента</h2>
    </div>
</template>

<script setup>
const intro = resolveComponent('ArticleIntro')
const text = resolveComponent('ArticleText')
const image = resolveComponent('ArticleImage')
const slider = resolveComponent('ArticleSlider')
const subscribe = resolveComponent('FruitSubscribe')
const list = resolveComponent('ArticleList')
const form = resolveComponent('FruitForm')

const route = useRoute()

const config = useRuntimeConfig()


const blocks = ref([])

const { data, error } = await useFetch(config.public.apiBase+route.fullPath)

blocks.value = data._value.body

useHead({
  title: data._value.meta.title,
  meta: [
    { description: data._value.meta.description }
  ]
})

const component = (block) => {
    switch (block.type) {
        case 'text_block':
            return text
        case 'image_block':
            return image
        case 'slider_block':
            return slider
        case 'subscribe_form_block':
            return subscribe
        case 'article_list_block':
            return list
        case 'article_intro_block':
            return intro
        case 'cta_form_block':
            return form
        default:
            return null
    }
}

</script>

<style lang="scss" scoped>
.article-detail {
    margin: 0 auto;
    max-width: 1340px;

    &__block {
        margin-bottom: 30px;

        @media screen and (min-width: 1024px) {
            margin-bottom: 60px;
        }
    }
}
</style>