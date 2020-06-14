<template>
	<div class="menu">
		<Dots class="toolbar__Dots" @click="togglePopup()" />
		<ul class="menu__popup" v-if="isOpen">
			<li class="menu__item">Perfil</li>
			<li class="menu__item">Configurações</li>
			<li class="menu__item">
				<a href @click.prevent="signOut()">Sair</a>
			</li>
		</ul>
	</div>
</template>

<script>
import Dots from '@/components/Toolbar/Dots.vue';

export default {
	name: 'Menu',
	components: {
		Dots
	},
	methods: {
		togglePopup() {
			this.isOpen = !this.isOpen;
		},
		signOut() {
			localStorage.removeItem('USER_TOKEN');
			this.$router.push('/');
		}
	},
	data() {
		return {
			isOpen: false
		};
	}
}
</script>

<style scoped lang="scss">
.menu {
	position: relative;

	&__popup {
		position: absolute;
		top: 30px;
		right: 0;
		width: 133px;
		background-color: $color-white;
	}

	&__item {
		display: flex;
		align-items: center;
		height: 40px;
		width: 100%;
		font-weight: $font-weight-semibold;
		color: $color-blue;
		padding: 0 spacing(1);
	}
}
</style>
