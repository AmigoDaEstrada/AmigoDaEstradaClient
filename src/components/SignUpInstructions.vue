<template>
    <div class="signup-instructions">
        <h4 class="signup-instructions__title">
            {{ phases[phase - 1].title }}
        </h4>
        <h5 class="signup-instructions__description">
            {{ phases[phase - 1].description }}
        </h5>

        <div class="signup-instructions__navigation">
            <a 
                class="signup-instructions__phase-button"
                :class="{ 'signup-instructions__phase-button--current': (index + 1) === phase }" 
                @click.prevent="goToPhase(index + 1)"
                href
                v-for="(item, index) in phases" 
                :key="item.title"
            >
                {{ index + 1 }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUpInstructions',
    props: {
        phase: Number
    },
    methods: {
        goToPhase(phase) {
            this.$emit('changePhase', phase);
        }
    },
    data() {
        return {
            phases: [
                {
                    title: 'Podemos nos conhecer melhor?',
                    description: 'Preencha os seus dados e conecte-se.'
                },
                {
                    title: 'Para a sua segurança e de outros caminhoneiros',
                    description: 'Preencha os seus dados e conecte-se.'
                },
                {
                    title: 'Para a sua segurança e de outros',
                    description: 'Preencha os seus dados e conecte-se.'
                }
            ]
        };
    }
}
</script>

<style lang="scss" scoped>
    .signup-instructions {
        color: white;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        &__title {
            text-transform: uppercase;
            font-size: 16px;
            margin-bottom: spacing(1);
            font-weight: $font-weight-black;
            line-height: 1.3em;
            max-width: 80%;
        }

        &__description {
            line-height: 1.3em;
        }

        &__navigation {
            display: flex;
            align-items: center;
            margin-top: spacing(2);
        }

        &__phase-button {
            width: 23px;
            height: 23px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: $color-white;
            font-size: 12px;
            margin: 0 spacing(1);
            font-weight: $font-weight-semibold;

            &--current {
                background-color: $color-white;
                color: $color-blue;
            }
        }
    }
</style>