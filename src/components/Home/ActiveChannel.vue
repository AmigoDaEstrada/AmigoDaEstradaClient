<template>
    <div class="active-channel" v-if="activeChannel.id">
        <div class="active-channel__pictures-preview">
            <img :src="activeChannel.users[0].picture" class="active-channel__preview-pic">
            <img :src="activeChannel.users[1].picture" class="active-channel__preview-pic">
        </div>

        <div class="active-channel__info">
            <div class="active-channel__name">
                <span>{{ activeChannel.name }}</span>

                <a href class="active-channel__add-member">
                    <i class="material-icons icon">group_add</i>
                </a>
            </div>
            <span class="active-channel__members">{{ activeChannel.users.length }} caminhoneiros conectados</span>
            <a href class="active-channel__see-all">Ver todos</a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        destiny: String
    },
    computed: {
        activeChannel() {
            return this.$store.state.activeChannel;
        }
    }
}
</script>

<style lang="scss" scoped>
    .active-channel {

        $this: &;
        $box-radius: 20px;
        color: $color-white;

        display: flex;

        &__pictures-preview {
            display: flex;
            flex-wrap: nowrap;
            position: relative;
            width: 48px;
            margin-right: spacing(1);
        }

        &__preview-pic {
            width: 30px;
            height: 30px;
            border-radius: 30px;
            border: solid 2px $color-white;
            position: relative;

            &:last-child {
                left: -20px;
                top: 8px;
            }
        }

        &__name {
            text-transform: uppercase;
            font-size: 16px;
            font-weight: $font-weight-semibold;
            display: flex;
            align-items: center;
        }

        &__add-member {
            margin-left: spacing(1);
            color: $color-white;

            .icon {
                font-size: 30px;
            }
        }

        &__label {
            margin-top: spacing(2);
            font-size: 16px;
            text-align: center;
        }

        &__info {
            display: flex;
            flex-direction: column;
        }

        &__see-all {
            color: $color-white;
            font-weight: $font-weight-semibold;
            margin-top: spacing(1);
        }
    }
</style>