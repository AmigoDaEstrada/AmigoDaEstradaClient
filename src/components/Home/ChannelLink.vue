<template>
    <a class="home-link" :class="{ 'home-link--active': active }" href>
        <div class="home-link__box">
            <i class="material-icons icon">{{ icon }}</i>
        </div>
        
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
        icon: String,
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
            display: flex;
            align-items: center;
            justify-content: center;
            width: 90px;
            height: 90px;
            border-radius: $box-radius;
            background-color: $color-white;
            opacity: .7;

            .icon {
                color: $color-blue;
                font-size: 50px;
            }
        }

        &__label {
            margin-top: spacing(2);
            font-size: 16px;
            text-align: center;
            color: $color-white;
        }

        &--active {

            #{$this}__box {

                opacity: 1;
            }
        }
    }
</style>