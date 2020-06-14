<template>
    <a class="home-link" @click.prevent="$emit('click')" :class="{ 'home-link--active': active }" href>
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
        icon: String
    }
}
</script>

<style lang="scss" scoped>
    .home-link {

        $this: &;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 122px;
        min-width: 100px;

        &__box {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 58px;
            height: 58px;
            border-radius: 15px;
            background-color: $color-white;
            opacity: .7;
            margin: auto;
            transition: width .4s ease-in-out, height .4s ease-in-out, opacity .4s ease-in-out, border-radius .4s ease-in-out;

            .icon {
                color: $color-blue;
                font-size: 30px;
                transition: font-size .4s ease-in-out;
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
                width: 80px;
                height: 80px;
                border-radius: 21px;
                opacity: 1;

                .icon {
                    font-size: 50px;
                }
            }
        }
    }
</style>