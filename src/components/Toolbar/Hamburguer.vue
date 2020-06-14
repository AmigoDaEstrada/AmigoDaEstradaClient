<template>
    <a href @click.prevent="$emit('click')" class="hamburguer">
        <div class="hamburguer__bar"></div>
    </a>
</template>

<style lang="scss" scoped>
    .hamburguer {

        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        &__bar {

            position: relative;

            &, 
            &::after, 
            &::before {
                width: 30px;
                height: 5px;
                background-color: white;
                border-radius: 5px;
            }

            &::after,
            &::before {
                content: '';
                position: absolute;
            }

            &::after {
                top: 11px;
            }

            &::before {
                top: -11px;
            }
        }
    }
</style>