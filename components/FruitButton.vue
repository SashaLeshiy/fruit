<template>
    <button type="button" :view="props.view" :class="classes">
        <slot/>
    </button>
</template>

<script setup>
const props = defineProps({
    view: {
        type: String,
        validator: (value) => { return ['default', 'black'].indexOf(value) !== -1},
        default: 'default',
    }
})

const classes = computed(() => {
    return [
        'fruit-button',
        props.view && `fruit-button__view-${props.view}`
    ]
})
</script>

<style lang="scss" scoped>
.fruit-button {
    padding: 8px 20px;
    height: 46px;
    color: #ffffff;
    background-color: #3657D3;
    border: none;
    box-sizing: border-box;

    &:hover {
        background-color: #CDC8CF;
        border: 1px solid;
        border-color: #3657D3;
        cursor: pointer;
    }

    &__view-black {
        background-color: #1b1b1b;
        border: none;

        &:hover {
            background-color: #3657D3;
            cursor: pointer;
        }
    }
}
</style>