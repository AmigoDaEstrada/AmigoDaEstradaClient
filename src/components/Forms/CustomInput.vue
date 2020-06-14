<template>
    <div class="custom-input">
        <label v-if="label" :for="id" class="custom-input__label">{{ label }}</label>
        <input 
            class="custom-input__input" 
            @input="$emit('input', $event.target.value)"
            :type="type" 
            :placeholder="placeholder"
            :value="value"
            :id="id"
        />
    </div>
</template>

<script>
export default {
    name: 'CustomInput',
    props: {
        variant: String,
        type: String,
        label: String,
        placeholder: String,
        value: String,
        id: String
    }
}
</script>

<style lang="scss">
    .custom-input {

        flex-grow: 1;

        &__label {
            margin-bottom: spacing(1);
            display: block;
            font-weight: $font-weight-semibold;
        }

        &__input {
            padding: spacing(2) spacing(2);
            border: solid 1px $color-gray;
            font-family: $font-family-roboto;
            border-radius: 8px;
            font-size: 14px;
            background-color: $color-gray-light;
            flex-grow: 1;
            width: calc(100% - #{spacing(2)} * 2);

            &::placeholder {
                color: $color-gray-dark;
            }

            &[type=search] {
                padding-left: spacing(5);
            }

            &:focus {
                background-color: $color-white;
            }
        }
    }
</style>