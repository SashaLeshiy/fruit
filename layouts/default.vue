<script setup>

</script>

<template>
  <div class="main">
    <FruitHeader />
      <slot />
    <FruitFooter />
  </div>
</template>

<style lang="scss" scoped>
.main {
    font-family: Montserrat, Open Sans, Arial, Helvetica, sans-serif;
}
</style>