<template>
	<div class="menu">
		<Hamburguer class="toolbar__hamburguer" />
	</div>
</template>

<script>
import Hamburguer from '@/components/Toolbar/Hamburguer.vue';

export default {
	name: 'Menu',
	components: {
		Hamburguer
	},
	data() {
		return {
		};
	}
}
</script>

<style scoped lang="scss">
.toolbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: calc(100% - #{spacing(3)} * 2);
	height: 70px;
	padding: 0 spacing(3);
	background-color: white;
	color: $color-blue;
	box-shadow: shadow-depth(2);

	&__search {
		flex-grow: 1;
		max-width: 600px;
		margin: 0 spacing(3);
	}
}
</style>
