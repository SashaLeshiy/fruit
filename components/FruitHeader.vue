<template>
    <div class="fruit-header">
        <div class="fruit-header__container">
            <NuxtLink to="/">
                <img src="@/assets/images/logo.png" class="fruit-header__logo" alt="logo" />
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.fruit-header {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 85px;

    &__container {
        max-width: 1340px;
    }
}
</style>