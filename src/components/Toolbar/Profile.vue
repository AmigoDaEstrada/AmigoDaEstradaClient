<template>
    <a href class="profile">
        <div class="profile__image">
            <img src="https://picsum.photos/80" />
        </div>
        <div class="profile__info">
            <span class="profile__name">{{ user.name }}</span>
        </div>
    </a>
</template>

<script>

export default {
    name: 'Profile',
    computed: {
        user() {
            return this.$store.state.user;
        }
    }
}
</script>

<style lang="scss">
    .profile {
        text-decoration: none;
        display: flex;
        align-items: center;
        flex-direction: column;

        &__info {
            display: flex;
            flex-direction: column;
            text-align: right;
            color: $color-black;
        }

        &__name {
            font-size: 16px;
            color: $color-white;
        }

        &__image {
            background-color: $color-blue;
            width: 80px;
            height: 80px;
            border-radius: 50%;
            border: solid 2px $color-white;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: spacing(2);

            img {
                width: 74px;
                height: 74px;
                border-radius: 50%;
            }
        }
    }
</style>