<template>
    <div class="fruit-form">
        <div class="fruit-form__container">
            <img src="@/assets/images/form_img.png" class="fruit-form__image" />
            <div class="fruit-form__form-content">
                <h3 class="fruit-form__form-title">
                    Стань участником проекта
                </h3>
                <div class="fruit-form__form">
                    <div class="fruit-form__inputs">
                        <input type="text" class="fruit-form__input" placeholder="Имя"/>
                        <input type="text" class="fruit-form__input" placeholder="Телефон"/>
                        <input type="email" class="fruit-form__input" placeholder="Email"/>
                    </div>
                    <FruitButton class="fruit-form__button">Присоединиться</FruitButton>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.fruit-form {
    padding: 0 20px;

    &__container {
        padding: 30px;
        background-color: hsl(0, 0%, 11%);

        @media screen and (min-width: 1024px) {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 20px;
            align-items: start;
        }

        @media screen and (min-width: 1200px) {
            grid-gap: 60px;
        }
    }

    &__image {
        width: 100%;
    }

    &__form {
        margin-top: 20px;

        @media screen and (min-width: 768px) {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
        }

        @media screen and (min-width: 1024px) {
            flex-direction: column;
            align-items: start;
        }
    }

    &__form-content {
        @media screen and (min-width: 1200px) {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
        }
    }

    &__form-title{
        color: #fefefe;
        font-weight: 800;
        font-size: 34px;
        line-height: 46px;

        @media screen and (min-width: 768px) {
            margin-top: 0;
        }
    }

    &__inputs {
        display: flex;
        flex-direction: column;
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
            width: 353px;

            &:last-of-type {
                margin-bottom: 0;
            }
        }

        @media screen and (min-width: 1024px) {
            margin-right: 12px;

            &:last-of-type {
                margin-bottom: 30px;
            }
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