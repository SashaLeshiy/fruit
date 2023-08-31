<template>
    <div v-html="props.data" class="article-text"></div>
</template>

<script setup>
const props = defineProps({
    data: String,
    require: true
})
</script>

<style lang="scss" scoped>
.article-text {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 884px;

    :deep(p) {
        color: #1b1b1b;
        font-weight: 400;
        font-size: 18px;
        line-height: 26px;
    }

    :deep(h2) {
        padding-bottom: 20px;
        color: #1b1b1b;
        font-weight: 800;
        font-size: 22px;
        line-height: 30px;
    }

    :deep(ul) {
        list-style-type: none;

        @media screen and (min-width: 768px) {
            margin-left: 30px;
        }

        @media screen and (min-width: 1024px) {
            margin-left: 70px;
        }

        li {
            position: relative;
            color: #000000;
            font-weight: 400;
            font-size: 18px;
            line-height: 26px;
        }

        li::before {
            content: '';
            position: relative;
            display: inline-block;
            width: 8px;
            height: 8px;
            background-color: black;
            margin-right: 10px;
            transform: rotate(45deg);
        }
    }

    :deep(blockquote) {
        display: grid;
        grid-template-columns: 40px 1fr;
        margin: 0;

        @media screen and (min-width: 768px) {
            grid-template-columns: 100px 1fr;
        }

        &::before {
            content: '';
            width: 30px;
            background-image: url('@/assets/icons/quotes_icon.svg');
            background-size: contain;
            background-repeat: no-repeat;

            @media screen and (min-width: 768px) {
                width: 80px;
            }
        }
        p {
            margin-top: 0;
            color: #1b1b1b;
            font-weight: 300;
            font-style: italic;
            font-size: 18px;
            line-height: 26px;
        }

        footer {
            grid-column: 2 / 3;
            color: #8d959c;
            font-weight: 400;
            font-size: 14px;
            line-height: 20px;
        }
    }


}

</style>