<template>
    <div class="mic-instructions" v-if="$store.state.activeChannel.id">
        <i class="material-icons mic-instructions__icon">{{ $store.state.cambio ? 'mic' : 'mic_off' }}</i>
        <div class="mic-instructions__text">
            <p>
                Para <strong>se comunicar pelo canal</strong> fale <strong>cambio</strong> e 
                <strong>cambio desligo</strong> quando finalizar sua fala ou toque aqui.
            </p>
            <p>
                Limite de 15 segundos
            </p>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .mic-instructions {
        display: flex;
        color: $color-white;

        &__icon {
            font-size: 54px;
            margin-right: spacing(3);
        }

        &__text {
            line-height: 1.3em;

            p {
                margin-bottom: spacing(2);

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
</style>