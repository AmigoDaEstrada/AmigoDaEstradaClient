<template>
    <a href @click.prevent="$emit('click')" class="dots">
        <div class="dots__dot"></div>
    </a>
</template>

<style lang="scss" scoped>
    .dots {

        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;

        &__dot {

            position: relative;

            &, 
            &::after, 
            &::before {
                width: 5px;
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
                top: 8px;
            }

            &::before {
                top: -8px;
            }
        }
    }
</style>