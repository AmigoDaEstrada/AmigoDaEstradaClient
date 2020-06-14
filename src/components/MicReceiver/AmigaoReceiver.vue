<template>
    <a href @click.prevent="toggleRecognizing()" class="amigao-receiver">
        <MicWaves :content="runtimeTranscription" :active="recognizing" />
        <p class="amigao-receiver__instruction">
            Fale <strong>Ei Amigão</strong> para acionar comandos de voz, ou toque aqui.
        </p>
    </a>
</template>

<script>
import MicWaves from '@/components/MicReceiver/MicWaves.vue';

export default {
    components: {
        MicWaves
    },
    mounted () {
        this.checkApi()
    },
    methods: {
        toggleRecognizing() {
            this.recognizing = !this.recognizing;

            if (this.recognizing) {
                this.createTimeout();
            }
        },
        createTimeout() {
            clearTimeout(this.waitingTimeout);
            this.waitingTimeout = setTimeout(() => {
                this.recognizing = false;
                this.transcription = '';
            }, 10000);
        },
        checkApi () {
            window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition

            if (!SpeechRecognition && process.env.NODE_ENV !== 'production') {
                throw new Error('Speech Recognition does not exist on this browser. Use Chrome or Firefox')
            }

            if (!SpeechRecognition) {
                return
            }

            const recognition = new SpeechRecognition()

            recognition.lang = this.lang
            recognition.interimResults = true

            recognition.addEventListener('result', event => {
                const text = Array.from(event.results)
                    .map(result => result[0])
                    .map(result => result.transcript)
                    .join('');

                this.runtimeTranscription = text
            })

            recognition.addEventListener('end', () => {
                if (this.runtimeTranscription !== '') {
                    this.createTimeout();

                    const transcriptionNormalized = this.removeAccents(this.runtimeTranscription).toUpperCase();

                    if (transcriptionNormalized.includes('EI AMIGAO') && !this.recognizing) {
                        this.recognizing = true;
                    }

                    if (this.$store.state.activeChannel.id) {
                        if (transcriptionNormalized.includes('CAMBIO DESLIGO')) {
                            this.$store.commit('turnCambioOn');
                        }
                        else if (transcriptionNormalized.includes('CAMBIO')) {
                            this.$store.commit('turnCambioOff');
                        }
                    }

                    if (this.recognizing) {
                        
                        this.transcription += transcriptionNormalized;

                        if (this.transcription.includes('SOCORRO') || this.transcription.includes('ALERTA')) {
                            this.transcription = '';
                            this.$emit('help');
                        }

                        if (this.transcription.includes('CANAL GERAL')) {
                            this.transcription = '';
                            this.$emit('general');
                        }

                        if (this.transcription.includes('CANAL PRIVADO') || this.transcription.includes('CANAIS PRIVADOS') || this.transcription.includes('GRUPOS')) {
                            this.transcription = '';
                            this.$emit('groups');
                        }

                        if (this.transcription.includes('CONTATO') || this.transcription.includes('AMIGOS') || this.transcription.includes('CAMINHONEIROS')) {
                            this.transcription = '';
                            this.$emit('contacts');
                        }

                        if (this.transcription.includes('DÚVIDA')) {
                            this.transcription = '';
                            this.$emit('suport');
                        }
                    }

                    this.$emit('onTranscriptionEnd', {
                        transcription: this.transcription,
                        lastSentence: this.runtimeTranscription
                    });
                }

                this.runtimeTranscription = '';

                recognition.start();
            })

            recognition.addEventListener('error', err => {
                console.log(err);
            });

            recognition.start()
        },
        removeAccents(str) {

            const com_acento = "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝŔÞßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿŕ";
            const sem_acento = "AAAAAAACEEEEIIIIDNOOOOOOUUUUYRsBaaaaaaaceeeeiiiionoooooouuuuybyr";

            let novastr="";
            let troca;

            for(let i=0; i<str.length; i++) {

                troca = false;
                
                for (let a = 0; a < com_acento.length; a++) {
                    if (str.substr(i,1) == com_acento.substr(a,1)) {
                        this.transcription = '';
                        novastr += sem_acento.substr(a,1);
                        troca = true;
                        break;
                    }
                }
                if (troca == false) {
                    novastr += str.substr(i,1);
                }
            }
            return novastr;
        }      
    },
    data() {
        return {
            lang: 'pt-BR',
            runtimeTranscription: '',
            transcription: '',
            recognizing: false,
            waitingTimeout: null
        };
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