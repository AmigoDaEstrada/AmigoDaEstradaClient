<template>
    <a href class="amigao-receiver">
        <MicWaves />
        <p class="amigao-receiver__instruction">
            Fale <strong>Olá Amigão</strong> para acionar comandos de voz, ou toque aqui.
        </p>
    </a>
</template>

<script>
import MicWaves from '@/components/MicReceiver/MicWaves.vue';

export default {
    components: {
        MicWaves
    }    
}
</script>

<style lang="scss" scoped>
    .amigao-receiver {
        
        &__instruction {
            color: $color-white;
            font-size: 16px;
            text-align: center;
            max-width: 245px;
            line-height: 1.3em;
            margin-top: -#{spacing(2)};
        }
    }
</style>