<template>
  <div class="boarding">
        <div class="boarding__card" v-if="step === 1">
            <div class="boarding__illustration">
                <img class="picture" src="@/assets/images/truck-illustration.svg" />
            </div>
            <p class="boarding__text">
                Olá amigo caminhoneiro esse aplicativo foi feito pensando em você
                e na sua segurança nas estradas.
            </p>
            <div class="boarding__navigation">
                <a 
                    class="boarding__step-button"
                    :class="{ 'boarding__step-button--current': (index + 1) === step }" 
                    @click.prevent="goToStep(index + 1)"
                    href
                    v-for="(item, index) in steps" 
                    :key="item"
                >
                    {{ index + 1 }}
                </a>
            </div>
        </div>

        <div class="boarding__card" v-if="step === 2">
            <div class="boarding__illustration">
                <img class="picture" src="@/assets/images/phone-map-illustration.svg" />
            </div>
            <p class="boarding__text">
                 Conectamos você a outros colegas de trabalho, por um sinal semelhante ao 
                 radioamador e assim você consegue conversar e pedir ajuda a quem está mais 
                 próximo de você.
            </p>
            <div class="boarding__navigation">
                <a 
                    class="boarding__step-button"
                    :class="{ 'boarding__step-button--current': (index + 1) === step }" 
                    @click.prevent="goToStep(index + 1)"
                    href
                    v-for="(item, index) in steps" 
                    :key="item"
                >
                    {{ index + 1 }}
                </a>
            </div>
        </div>

        <div class="boarding__card" v-if="step === 3">
            <div class="boarding__illustration">
                <img class="picture" src="@/assets/images/monitor-illustration.svg" />
            </div>
            <p class="boarding__text">
                 Cada caminhoneiro tem o canal de comunicação aberto para falar 15 segundos por 
                 vez para que todos tenham espaço para conversa, não xingue ou fale palavrões. 
                 Vamos começar?
            </p>
            <div class="boarding__navigation">
                <a 
                    class="boarding__step-button"
                    :class="{ 'boarding__step-button--current': (index + 1) === step }" 
                    @click.prevent="goToStep(index + 1)"
                    href
                    v-for="(item, index) in steps" 
                    :key="item"
                >
                    {{ index + 1 }}
                </a>
            </div>
        </div>

        <CustomButton v-if="step === 3" @click="goToHome()" variant="white" class="boarding__button">
            Começar a usar
        </CustomButton>

        <CustomButton v-if="step < 3" @click="goToStep(step + 1)" variant="white" class="boarding__button">
            Proximo
        </CustomButton>
        <CustomButton v-if="step > 1" @click="goToStep(step - 1)" class="boarding__button" variant="white-empty">
            Voltar
        </CustomButton>
  </div>
</template>

<script>
import CustomButton from '@/components/Forms/CustomButton.vue'

export default {
  name: 'OnBoarding',
  components: {
      CustomButton,
  },
  data() {
      return {
          step: 1,
          steps: [1,2,3]
      };
  },
  methods: {
      goToStep(step) {
          this.step = step;
      },
      goToHome(step) {
          this.$router.push('/home');
      }
  }
}
</script>

<style lang="scss" scoped>
    .boarding {
        min-height: calc(100vh - 90px);
        background-color: $color-blue;
        padding-top: 130px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &__illustration {
            height: 130px;
            width: 100%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;

            .picture {
                margin-top: -90px;
            }
        }

        &__button {
            margin-top: spacing(3);
            width: 90%;
        }

        &__text {
            width: 80%;
            font-size: 16px;
            text-align: center;
            color: $color-blue;
            line-height: 1.5em;
        }

        &__card {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: white;
            border-radius: 30px;
            width: 90%;
        }

        &__navigation {
            display: flex;
            align-items: center;
            margin: spacing(5) 0;
        }

        &__step-button {
            width: 23px;
            height: 23px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: $color-blue;
            font-size: 12px;
            margin: 0 spacing(1);
            font-weight: $font-weight-semibold;

            &--current {
                background-color: $color-blue;
                color: $color-white;
            }
        }
    }
</style>