<template>
    <div class="logo" :class="`logo--${ variant }`">
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
        variant: String
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
                margin-bottom: 4px;
            }
        
        }

        &--blue {
            
            #{$this}__text {                
                color: $color-blue;
            }
        }
    }
</style>