<template>
    <div class="channel-groups">
        <h5 class="channel-groups__title">Seus grupos</h5>
        <p class="channel-groups__number">3 grupos</p>

        <ul class="channel-groups__list">
            <li class="channel-groups__item">
                <div class="item-info">
                    <img src="https://picsum.photos/44" alt="" class="item-info-pic">
                    <div class="item-info-desc">
                        <span class="item-info-desc-name">Caminhoneiros de SC</span>
                        <span class="item-info-desc-members">37 caminhoneiros conectados</span>
                        <a href class="item-info-desc-all-members">Ver todos</a>
                    </div>
                </div>
                <CustomButton variant="white-empty" href class="item-join">
                    Entrar no Canal
                </CustomButton>
            </li>
        </ul>
    </div>
</template>

<script>
import CustomButton from '@/components/Forms/CustomButton.vue';

export default {
    name: 'ChannelGroups',
    components: {
        CustomButton
    }    
}
</script>

<style lang="scss" scoped>
    .channel-groups {

        color: $color-white;

        &__title {
            text-transform: uppercase;
            font-size: 16px;
            margin-bottom: 4px;
            text-align: center;
            font-weight: $font-weight-semibold;
        }

        &__number {
            margin-bottom: spacing(3);
            text-align: center;
        }

        &__list {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        &__item {
            display: flex;
            flex-direction: column;

            .item-join {
                width: 100%;
            }
            
            .item-info {
                display: flex;
                margin-bottom: spacing(2);

                .item-info-pic {
                    width: 30px;
                    height: 30px;
                    border-radius: 30px;
                    border: solid 2px $color-white;
                    margin-right: spacing(1);
                }

                .item-info-desc {
                    
                    display: flex;
                    flex-direction: column;

                    .item-info-desc-name {
                        text-transform: uppercase;
                        margin-bottom: 4px;
                        font-weight: $font-weight-semibold;
                    }

                    .item-info-desc-all-members {
                        margin-top: spacing(1);
                        font-weight: $font-weight-semibold;
                        color: $color-white;
                    }
                }
            }
        }
    }
</style>