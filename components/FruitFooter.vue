<template>
  <div class="fruit-footer">
    <div class="fruit-footer__container">
      <div class="fruit-footer__content">
        <div class="fruit-footer__left">
          <img src="@/assets/images/logo.png" class="fruit-footer__left-logo" />
          <p class="fruit-footer__left-description">
            Cтатьи о дизайне и искусстве, которые исследуют творческие
            вдохновения и актуальные тенденции, раскрывая мир эстетики и
            креативности
          </p>
        </div>
        <div class="fruit-footer__right">
          <div class="fruit-footer__right-email">
            <p class="fruit-footer__right-email--label">email</p>
            <p class="fruit-footer__right-email--email">
              testblogsupport@gmail.com
            </p>
          </div>
          <div class="fruit-footer__right-icons">
            <img
              src="@/assets/icons/fb_icon.svg"
              class="fruit-footer__right-icons--icon"
            />
            <img
              src="@/assets/icons/vk_icon.svg"
              class="fruit-footer__right-icons--icon"
            />
            <img
              src="@/assets/icons/ins_icon.svg"
              class="fruit-footer__right-icons--icon"
            />
            <img
              src="@/assets/icons/tel_icon.svg"
              class="fruit-footer__right-icons--icon"
            />
          </div>
        </div>
      </div>
      <FruitSubscribe />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.fruit-footer {
    margin-top: 80px;
    min-height: 300px;
    border-top: 1px solid #8d959c;

    :deep(.fruit-subscribe) {
      padding: 0;
    }

  &__container {
    margin: 0 auto;
    padding: 20px;
    max-width: 1340px;
  }

  &__content {
    margin-bottom: 30px;

    @media screen and (min-width: 768px) {
      display: grid;
      grid-template-columns: 426px 1fr;
      justify-items: end;
      padding: 40px 0;
    }
  }

  &__left-description {
    max-width: 426px;
    color: #8d959c;
    font-weight: 400px;
    font-size: 14px;
    line-height: 20px;
  }

  &__right-email--label {
    margin: 0;
    color: #8d959c;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
  }

  &__right-email--email {
    margin: 0 0 26px 0;
    color: #1b1b1b;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
  }

  &__right-icons--icon {
    margin-right: 12px;
  }
}
</style>
