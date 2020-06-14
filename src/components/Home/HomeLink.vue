<template>
    <a class="home-link" href>
        <i class="material-icons home-link__icon">{{ icon }}</i>

        <div class="home-link__divisory"></div>
        
        <span class="home-link__label">
            {{ label }}
        </span>
    </a>
</template>

<script>
export default {
    props: {
        icon: String,
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

        &__icon {
            font-size: 50px;
            color: $color-white;
        }

        &__label {
            font-size: 16px;
            text-align: center;
            color: $color-white;
        }

        &__divisory {
            width: 96px;
            height: 13px;
            border-radius: 13px;
            background-color: $color-white;
            margin: spacing(1) 0;
        }
    }
</style>