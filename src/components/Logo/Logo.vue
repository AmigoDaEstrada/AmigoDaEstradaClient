<template>
    <div class="logo" :class="`logo--${ variant } logo--${ size }`">
        <Truck :variant="variant" class="logo__image" />
        <div class="logo__text">
            <h1 class="title">Amigo</h1>
            <h2 class="subtitle">
                da estrada
            </h2>
        </div>
    </div>
</template>

<script>
import Truck from '@/components/Logo/Truck.vue';

export default {
    name: 'Logo',
    components: {
        Truck
    },
    props: {
        variant: String,
        size: String
    }
}
</script>

<style lang="scss" scoped>
    .logo {

        $this: &;

        display: flex;
        align-items: center;

        &__image {
            margin-right: spacing(2);
        }

        &__text {
            display: inline-flex;
            align-items: center;
            flex-direction: column;
            color: white;
            font-family: $font-family-gilroy;
            font-weight: $font-weight-extra-bold;
            text-transform: uppercase;
    
            .title {
                font-size: 32px;
                margin-bottom: 4px;
            }
    
            .subtitle {
                font-size: 18px;
            }
        
        }

        &--blue {
            
            #{$this}__text {                
                color: $color-blue;
            }
        }

        &--small {
            #{$this}__image {
                width: 40px;
                margin-right: spacing(1);
            }

            #{$this}__text {
                .title {
                    font-size: 18px;
                    margin-bottom: 2px;
                }
        
                .subtitle {
                    font-size: 10px;
                }
            }
        }
    }
</style>