<template>
    <div class="mobile-only-warning">
        <Logo variant="white" class="mobile-only-warning__logo" />
        <h3 class="mobile-only-warning__title">
            Aplicação exclusiva para dispositivos moveis.
        </h3>
        <h5 class="mobile-only-warning__description">
            Para uma melhor experiência, acesse esta mesma página pelo seu celular ou tablet.
        </h5>
    </div>
</template>

<script>
import Logo from '@/components/Logo/Logo.vue';

export default {
    name: 'MobileOnlyWarning',
    components: {
        Logo
    }
}
</script>

<style lang="scss" scoped>
    .mobile-only-warning {
        display: none;

        @media (min-width: 750px) {
            display: flex;
            position: fixed;
            z-index: 3;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: $color-blue;
            color: $color-white;
            text-align: center;

            &__logo {
                margin-bottom: spacing(4);
            }

            &__title {
                font-size: 24px;
                font-weight: $font-weight-medium;
                margin-bottom: spacing(2);
                max-width: 300px;
                line-height: 1.3em;
            }

            &__description {
                font-size: 16px;
                max-width: 450px;
                line-height: 1.3em;
                font-weight: $font-weight-thin;
            }
        }
    }
</style>