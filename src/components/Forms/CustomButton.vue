<template>
    <button 
        :id="id" 
        @click="$emit('click', $event.target.value)" 
        class="custom-button"
        :class="`custom-button--${variant}`"
        :type="type"
        :disabled="disabled"
    >
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'CustomButton',
    props: {
        variant: String,
        type: String,
        id: String,
        disabled: Boolean
    }
}
</script>

<style lang="scss">
    .custom-button {
        border: none;
        padding: spacing(2) spacing(2);
        border-radius: 50px;
        background-color: $color-blue;
        color: $color-white;
        font-family: $font-family-roboto;
        font-weight: $font-weight-semibold;
        font-size: 16px;
        transition: box-shadow .2s ease-in-out, background-color .2s ease-in-out;
        cursor: pointer;

        &:disabled {
            box-shadow: none;
            background-color: $color-gray;
        }

        &--white {
            background-color: $color-white;
            color: $color-blue;
            border: solid 1px $color-blue;
        }

        &--white-empty {
            background-color: rgba($color-white, 0);
            color: $color-white;
            border: solid 1px $color-white;
        }

        &--red {
            background-color: $color-red;
            color: $color-white;
            border: solid 1px $color-red;
        }
    }
</style>