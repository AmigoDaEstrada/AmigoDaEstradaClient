<template>
    <a class="home-link" :class="{ 'home-link--active': active }" href>
        <div class="home-link__box"></div>
        
        <span class="home-link__label">
            {{ label }}
        </span>
    </a>
</template>

<script>
export default {
    props: {
        active: Boolean,
        label: String,
        destiny: String
    }
}
</script>

<style lang="scss" scoped>
    .home-link {

        $this: &;
        $box-radius: 20px;

        display: flex;
        flex-direction: column;
        align-items: center;

        &__box {
            width: 100px;
            height: 100px;
            border-radius: $box-radius;
            background-color: $color-white;
        }

        &__label {
            margin-top: spacing(2);
            font-size: 16px;
            text-align: center;
            color: $color-white;
        }

        &--active {

            #{$this}__box {
                position: relative;

                &::after {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    border-radius: $box-radius;
                    background-color: rgba($color-blue-extra-light, .8);
                }
            }
        }
    }
</style>