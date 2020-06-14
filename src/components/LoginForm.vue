<template>
    <form class="login-form" :class="{ 'login-form--sign-up': signUp }" @submit.prevent="proceed()">

        <h5 class="login-form__title">Para entrar preencha seus dados abaixo</h5>
        
        <div class="login-form__field" v-if="signUp && phase === 1">
            <CustomInput 
                v-model="name" 
                id="name" 
                type="email"
                label="Escreva seu nome completo"
                placeholder="Nome"
            />
        </div>
        <div class="login-form__field" v-if="!signUp || (signUp && phase === 1)">
            <CustomInput 
                v-model="email" 
                id="email" 
                type="email"
                label="Escreva seu e-mail"
                placeholder="E-mail"
            />
        </div>
        <div class="login-form__field" v-if="signUp && phase === 1">
            <CustomInput 
                v-model="phone" 
                id="phone" 
                type="text"
                label="Escreva seu telefone"
                placeholder="+ 55"
            />
        </div>
        <div class="login-form__field" v-if="!signUp || (signUp && phase === 1)">
            <CustomInput 
                v-model="password" 
                id="password" 
                label="Escreva a sua senha"
                type="password" 
                placeholder="Senha"
            />
        </div>
        <div class="login-form__field" v-if="signUp && phase === 2">
            <CustomInput 
                v-model="cpf" 
                id="cpf" 
                type="text"
                label="Digite o número do seu CPF"
                placeholder="CPF"
            />
        </div>
        <div class="login-form__field" v-if="signUp && phase === 2">
            <CustomInput 
                v-model="cnh" 
                id="cnh" 
                type="text"
                label="Digite o número da sua CNH"
                placeholder="CNH"
            />
        </div>
        <div class="login-form__field login-form__upload-picture" v-if="signUp && phase === 2">
            <div class="picture-upload-instructions">
                <i class="material-icons icon">camera_alt</i>
                <p class="text">
                    Precisamos que você tire uma foto de seu rosto junto com a sua CNH.
                </p>
            </div>
            <input ref="uploadPictureButton" type="file" class="hiden-upload" accept="image/*;capture=camera">
            <CustomButton variant="white" @click="loadPicture()" type="button">
                Carregar foto 
            </CustomButton>

            <a class="picture-example" href>Ver exemplo de como fazer a foto.</a>
        </div>

        <SignUpConclusionMessage v-if="signUp && phase === 3" />

        <div class="login-form__field">
            <CustomButton class="login-form__button" type="submit" :disabled="!canProceed()" v-if="!signUp">
                Entrar
            </CustomButton>
            <a class="login-form__button login-form__password-recovery" href v-if="!signUp">
                Esqueceu sua senha? Recupere aqui
            </a>

            <CustomButton 
                @click="goSignUp()" 
                type="button" 
                :variant="signUp ? 'blue' : 'white'" 
                class="login-form__button" 
                v-if="!signUp || (signUp && phase === 3)"
            >
                Cadastrar-se
            </CustomButton>

            <CustomButton 
                @click="goToNextPhase()" 
                class="login-form__button" 
                type="button" 
                :disabled="!canProceed()" 
                v-if="signUp && phase < 3"
            >
                Proximo
            </CustomButton>

            <CustomButton 
                @click="goToLastPhase()" 
                class="login-form__button" 
                type="button" 
                variant="white"
                v-if="signUp && phase >= 1"
            >
                Voltar
            </CustomButton>
        </div>
    </form>
</template>

<script>
import CustomInput from '@/components/Forms/CustomInput.vue';
import CustomButton from '@/components/Forms/CustomButton.vue';
import CustomSelect from '@/components/Forms/CustomSelect.vue';
import SignUpConclusionMessage from '@/components/SignUpConclusionMessage.vue';
import UserService from '@/services/UserService.js';


export default {
    name: 'LoginForm',
    components: {
        CustomInput,
        CustomButton,
        CustomSelect,
        SignUpConclusionMessage
    },
    props: {
        phase: Number
    },
    data() {
        return {
            justSignedUp: false,
            email: '',
            name: '',
            phone: '',
            cpf: '',
            cnh: '',
            password: '',
            signUp: false
        };
    },
    methods: {
        loadPicture() {
            this.$refs.uploadPictureButton.click();
        },
        goSignUp() {
            this.signUp = true;
            this.$emit('signUp');
        },
        goToNextPhase() {
            this.$emit('changePhase', this.phase + 1);
        },
        goToLastPhase() {
            if (this.phase === 1) {
                this.signUp = false;
                this.$emit('closeSignUp');
            }
            else {
                this.$emit('changePhase', this.phase - 1);
            }
        },
        getTitleMessage() {
            if (this.signUp) {
                return 'Faça seu cadastro na plataforma';
            }
            else if (this.justSignedUp) {
                return 'Cadastro feito com sucesso! Entre na sua conta';
            }
            else {
                return 'Entre na sua conta';
            }
        },
        canProceed() {
            return true;
            if (this.signUp) {
                if (this.phase === 1) {
                    return this.name.trim() && this.phoneIsValid(this.phone.trim()) && this.emailIsValid(this.email.trim());
                }
                else if (this.phase === 2) {
                    return this.cpfIsValid(this.cpf.trim()) /* && Foto com CNH */;
                }
                else if (this.phase === 3) {
                    return this.password;
                }
            }
            else {
                return this.emailIsValid(this.email.trim()) && this.password;
            }
        },
        cpfIsValid(cpf) {
            return /[0-9]{3}\.?[0-9]{3}\.?[0-9]{3}\-?[0-9]{2}/.test(cpf);
        },
        emailIsValid(email) {
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(email);
        },
        phoneIsValid(phone) {
            return /^\(?\d{2}\)?[\s-]?[\s9]?\d{4}-?\d{4}$/g.test(phone);
        },
        proceed() {
            
            if (this.signUp) {
                UserService
                    .registUser({
                        name: this.name,
                        password: this.password,
                        email: this.email
                    })
                    .then(() => this.justSignedUp = true);
            }
            else {
                /*UserService
                    .authenticateUser({
                        email: this.email,
                        password: this.password
                    })
                    .then(token => {
                        //if (token) {
                            window.localStorage.setItem('USER_TOKEN', token);*/
                            this.$store.dispatch('loadUserInfo', { token: '' }).then(() => {
                                this.$emit('login');
                            });
                        //}
                        //else {
                        //    alert('ERROU');
                        //}
                    //});
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-form {

        $this: &;

        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: $color-white;
        flex-grow: 1;
        padding: spacing(3);
        border-radius: 40px 40px 0 0;

        &__title {
            position: relative;
            margin-bottom: spacing(3);
            font-size: 20px;
            line-height: 1.3em;
            color: $color-blue;
            font-weight: $font-weight-black;
            text-align: center;
            text-transform: uppercase;
            height: 52px;
            transition: height .4s ease-in-out, margin-bottom .4s ease-in-out;
            z-index: 1;
        }

        &__field {
            position: relative;
            z-index: 2;
            display: flex;
            justify-content: center;
            align-self: center;
            margin-bottom: spacing(3);
            width: 100%;
            flex-direction: column;
            background-color: $color-white;

            &:last-child {
                margin-bottom: 0;
                margin-top: auto;
            }
        }

        &__button {
            flex-grow: 1;
            margin-bottom: spacing(2);
        }

        &__password-recovery {
            display: block;
            text-align: center;
            color: $color-black;
            font-weight: $font-weight-semibold;
        }

        &__upload-picture {

            position: relative;
            
            .picture-upload-instructions {
                
                display: flex;
                align-items: center;
                margin-bottom: spacing(2);

                .text {
                    font-size: 16px;
                    line-height: 1.3em;
                }

                .icon {
                    font-size: 34px;
                    margin-right: spacing(2);
                }
            }

            .hiden-upload {
                opacity: 0;
                position: absolute;
            }

            .picture-example {
                font-weight: $font-weight-semibold;
                color: $color-black;
                text-align: center;
                margin-top: spacing(2);
            }
        }

        &--sign-up {
            #{$this}__title {
                height: 0;
                margin-bottom: 0;
            }
        }
    }
</style>