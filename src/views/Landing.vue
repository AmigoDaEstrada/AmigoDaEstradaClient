<template>
  <div class="landing" :class="{ 'landing--wellcome': loggedIn }">

    <div class="landing__wrapper">
        <header class="landing__header" :class="{ 'landing__header--sign-up': signUp }">
            <div class="presentation">
                <Logo />
                <p class="user-name">Olá <strong>{{ this.$store.state.user.name }}</strong>, como está a estrada?</p>
            </div>

            <SignUpInstructions 
                class="header-signup-instructions" 
                @changePhase="changePhase" 
                :phase="signUpPhase" 
            />
        </header>
        
        <div class="landing__body">
            <LoginForm
                @signUp="goSignUp"
                @closeSignUp="goLogin"
                @login="showWellcome"
                @changePhase="changePhase"
                class="landing__login"
                :phase="signUpPhase"
            />
        </div>
    </div>

    <div class="landing__background"></div>
  </div>
</template>

<script>
import Logo from '@/components/Logo/Logo.vue'
import LoginForm from '@/components/LoginForm.vue'
import CustomButton from '@/components/Forms/CustomButton.vue'
import SignUpInstructions from '@/components/SignUpInstructions.vue'

export default {
  name: 'Landing',
  components: {
      Logo,
      LoginForm,
      CustomButton,
      SignUpInstructions
  },
  data() {
      return {
          signUp: false,
          signUpPhase: 1,
          loggedIn: false
      };
  },
  methods: {
      changePhase(phase) {
          console.log(phase);
          this.signUpPhase = phase;
      },
      showWellcome() {
          this.loggedIn = true;
          setTimeout(() => {
              if (this.$store.state.user.new) {
                  this.$router.push('/boarding');
              }
              else {
                  this.$router.push('/home');
              }
          }, 4000);
      },
      goLogin() {
          this.signUp = false;
      },
      goSignUp() {
          this.signUp = true;
      }
  }
}
</script>

<style lang="scss" scoped>
    .landing {

        $this: &;
        $header-height: 150px;

        background-color: $color-blue;
        height: 100vh;

        &__body,
        &__header {
            top: 0;
            transition: top 1s ease-in-out, opacity .7s .3s ease-in-out;
        }

        &__header {

            display: flex;
            flex-direction: column;
            align-items: center;
            height: $header-height;
            position: relative;
            z-index: 1;
            overflow: hidden;

            .user-name {
                opacity: 0;
                position: absolute;
                color: $color-white;
                width: 100%;
                text-align: center;
                transition: opacity .5s 1s ease-in-out;
            }

            .header-signup-instructions,
            .presentation {
                transition: top .4s ease-in-out, opacity .4s ease-in-out;
            }

            .header-signup-instructions {
                opacity: 0;
                position: relative;
                top: 100px;
            }

            .presentation {
                position: relative;       
                top: 28px;
            }

            &--sign-up {
                .presentation {
                    top: -100px;
                    opacity: 0;
                }

                .header-signup-instructions {
                    opacity: 1;
                    top: -38px;
                }
            }
        }

        &__body {
            position: relative;
            opacity: 1;
            display: flex;
            justify-content: space-between;
            z-index: 1;
            height: calc(100vh - #{$header-height});
        }

        &__login {
            flex-grow: 1;
            z-index: 1;
        }

        &__wrapper {
            max-width: 1080px;
            width: 100%;
            margin: 0 auto;
        }

        &__background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(rgba(#01091d, .7) 0%, rgba(#01091d, .7) 100%) , url('~@/assets/images/wellcome-background.png');
            background-size: cover;
            background-position: center;
            z-index: 0;
            opacity: 0;
            transition: opacity .5s ease-in-out;
        }

        &--wellcome {
            height: 100vh;
            overflow: hidden;

            #{$this}__header {
                top: 150px;

                .user-name {
                    opacity: 1;
                    top: 90px;
                }
            }

            #{$this}__body {
                top: 100vh;
                opacity: 0;
            }

            #{$this}__background {
                opacity: 1;
            }
        }
    }
</style>