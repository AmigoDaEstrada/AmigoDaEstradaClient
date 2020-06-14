<template>
    <div class="personal-contacts">
        <h5 class="personal-contacts__title">Seus contatos</h5>
        <p class="personal-contacts__number">300 amigos caminhoneiros</p>

        <ul class="personal-contacts__list">
            <li class="personal-contacts__item personal-contacts__item--action">
                <div class="item-pic">
                    <i class="material-icons icon">group_add</i>
                </div>
                <div class="item-desc">
                    <span class="item-name">Novo grupo</span>
                </div>
            </li>
            <li class="personal-contacts__item personal-contacts__item--action">
                <div class="item-pic">
                    <i class="material-icons icon">person_add</i>
                </div>
                <div class="item-desc">
                    <span class="item-name">Novo contato</span>
                </div>
            </li>
            <li class="personal-contacts__item personal-contacts__item--action">
                <img class="item-pic" src="https://picsum.photos/44" />
                <div class="item-desc">
                    <span class="item-name">Bino</span>
                    <span class="item-status">Conectado</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
    .personal-contacts {

        color: $color-white;

        &__title {
            text-align: center;
            font-weight: $font-weight-semibold;
            text-transform: uppercase;
            font-size: 16px;
            margin-bottom: 4px;
        }

        &__number {
            text-align: center;
        }

        &__list {
            margin-top: spacing(4);
            display: flex;
            flex-direction: column;
        }

        &__item {

            display: flex;
            align-items: center;
            margin-bottom: spacing(2);

            .item-pic {
                width: 38px;
                height: 38px;
                border-radius: 38px;
                border: solid 2px $color-white;
                color: $color-white;
                margin-right: spacing(1);
                display: flex;
                align-items: center;
                justify-content: center;
                
                .icon {
                    font-size: 18px;
                }
            }

            .item-desc {
                display: flex;
                flex-direction: column;

                .item-name {
                    text-transform: uppercase;
                    font-weight: $font-weight-semibold;
                }

                .item-status {
                    margin-top: 4px;
                }
            }
        }
    }
</style>