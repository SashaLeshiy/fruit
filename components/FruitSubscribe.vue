<template>
    <div class="fruit-subscribe">
        <div class="fruit-subscribe__container">
            <h3 class="fruit-subscribe__title">
                Подпишись на рассылку
            </h3>
            <div class="fruit-subscribe__right">
                <input type="text" class="fruit-subscribe__input" placeholder="Email"/>
                <FruitButton class="fruit-subscribe__button">Подписаться</FruitButton>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.fruit-subscribe {
    padding: 0 20px;

    &__container {
        padding: 30px;
        background-color: #1b1b1b;

        @media screen and (min-width: 1024px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    &__title {
        margin: 0 0 30px 0;
        color: #ffffff;
        font-weight: 800;
        font-size: 22px;
        line-height: 30px;

        @media screen and (min-width: 768px) {
            margin: 0;
        }
    }

    &__right {
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 768px) {
            flex-direction: row;
            align-items: end;
            justify-content: space-between;
        }

        @media screen and (min-width: 1024px) {
            align-items: end;
        }
    }

    &__input {
        all: unset;
        margin-bottom: 30px;
        width: 100%;
        color: #ffffff;
        background-color: inherit;
        border: none;
        border-bottom: 1px solid #8D959C;

        @media screen and (min-width: 768px) {
            margin-bottom: 0;
            width: 353px;
        }

        @media screen and (min-width: 1024px) {
            margin-right: 12px;
        }

        @media screen and (min-width: 1200px) {
            margin-right: 30px;
        }

        &::placeholder {
            color: #8D959C;
            font-weight: 400;
            font-size: 18px;
            line-height: 26px;
        }

        &:focus {
            color: #ffffff;
            border: none;
            border-bottom: 1px solid #3657D3;
        }

    }
}
</style>