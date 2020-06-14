<template>
    <a class="home-link" href>
        <i class="material-icons home-link__icon">{{ icon }}</i>
        
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
            font-size: 40px;
            color: $color-white;
            margin-bottom: spacing(1);
        }

        &__label {
            font-size: 14px;
            text-align: center;
            color: $color-white;
        }
    }
</style>