<template>
    <div class="conclusion-message">
        <h4 class="conclusion-message__text">
            Enviaremos uma mensagem para seu whatsapp confirmando os seus dados
            e liberando acesso ao aplicativo
        </h4>

        <div class="conclusion-message__illustrations">
            <GuyDraw class="conclusion-message__guy" />
            <CheckDraw :width="55" class="conclusion-message__check conclusion-message__check--1" />
            <CheckDraw class="conclusion-message__check conclusion-message__check--2" />
            <CheckDraw :width="32" class="conclusion-message__check conclusion-message__check--3" />
        </div>
    </div>
</template>

<script>
import GuyDraw from '@/components/Illustration/GuyDraw.vue';
import CheckDraw from '@/components/Illustration/CheckDraw.vue';

export default {
    name: 'SignUpConclusionMessage',
    components: {
        GuyDraw,
        CheckDraw
    }
}
</script>

<style lang="scss" scoped>
    @keyframes float {
        0% {
            transform: translateY(0);
        }

        50% {
            transform: translateY(20px);
        }

        100% {
            transform: translateY(0);
        }
    }
    .conclusion-message {
        
        position: relative;
        background-color: $color-white;
        z-index: 1;
        font-family: $font-family-roboto;

        &__text {
            text-align: center;
            line-height: 1.3em;
            font-size: 16px;
            margin-bottom: spacing(2);
        }

        &__check {

            position: absolute;
            
            &--1 {
                right: 10px;
                top: 80px;
                animation: float 10s ease-in-out infinite;
                opacity: .8;
            }
            
            &--2 {
                right: 60px;
                top: 200px;
                animation: float 7s ease-in-out infinite;
            }
            
            &--3 {
                right: 20px;
                top: 300px;
                animation: float 15s ease-in-out infinite;
                opacity: .6;
            }
        }
    }
</style>