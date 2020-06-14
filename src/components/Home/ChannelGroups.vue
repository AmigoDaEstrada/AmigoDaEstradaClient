<template>
    <div class="channel-groups">
        <a href v-if="$store.state.activeChannel.id && $store.state.activeChannel.id !== 'GENERAL'" @click.prevent="$store.commit('removeActiveChannel')" class="channel-groups__back">
            <i class="material-icons icon">keyboard_arrow_left</i>
        </a>
        <h5 class="channel-groups__title">Seus grupos</h5>
        <p 
            class="channel-groups__number" 
            :class="{ 'channel-groups__number--no-space' : $store.state.activeChannel.id && $store.state.activeChannel.id !== 'GENERAL' }"
        >
            {{ channels.length }} grupos
        </p>

        <ul class="channel-groups__list" v-if="!$store.state.activeChannel.id || $store.state.activeChannel.id === 'GENERAL'">
            <li class="channel-groups__item" v-for="channel in channels" :key="channel.id">
                <div class="item-info">
                    <img src="https://picsum.photos/44" alt="" class="item-info-pic">
                    <div class="item-info-desc">
                        <span class="item-info-desc-name">{{ channel.name }}</span>
                        <span class="item-info-desc-members">{{ channel.users.id }} caminhoneiros conectados</span>
                        <a href class="item-info-desc-all-members">Ver todos</a>
                    </div>
                </div>
                <CustomButton @click="$store.commit('addActiveChannel', { channel })" variant="white-empty" href class="item-join">
                    Entrar no Canal
                </CustomButton>
            </li>
        </ul>
    </div>
</template>

<script>
import CustomButton from '@/components/Forms/CustomButton.vue';
import ChannelService from '@/services/ChannelService.js'

export default {
    name: 'ChannelGroups',
    components: {
        CustomButton
    },
    methods: {
        getFilteredChannels() {
            let activeChannelId = this.$store.state.activeChannel.id;
            
            if (activeChannelId) {
                return this.channels.filter(channel => channel.id === activeChannelId);
            }
            else {
                return this.channels;
            }
        }
    },
    mounted() {
        ChannelService
            .getChannelsByUserId(1)
            .then(channels => this.channels = channels);
    },
    data() {
        return {
            channels: []
        };
    }
}
</script>

<style lang="scss" scoped>
    .channel-groups {

        color: $color-white;
        position: relative;

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

            &--no-space {
                margin-bottom: 0;
            }
        }

        &__list {
            width: 100%;
            display: flex;
            flex-direction: column;
        }

        &__item {
            display: flex;
            flex-direction: column;
            margin-bottom: spacing(4);

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

        &__back {
            position: absolute;
            left: 0;
            top: 0;
            color: $color-white;

            .icon {
                font-size: 40px;
            }
        }
    }
</style>