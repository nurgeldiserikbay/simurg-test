<template>
	<div class="cocktail-main">
		<div class="cocktail-main__list"><CocktailList /></div>
		<div class="cocktail-main__view">
			<router-view />
		</div>
	</div>
</template>

<script setup lang="ts">
import CocktailList from '../components/CocktailList.vue'
</script>

<style lang="scss" scoped>
@import "@/app/styles/_variables";
@import "@/app/styles/_mixins";

.cocktail-main {
	display: flex;
	justify-content: flex-start;
	align-items: stretch;

	@include get-media($mobile, $tablet) {
		flex-direction: column;
	}

	&__list {
		padding: 13px 15px;
		min-width: 200px;
	}

	&__view {
		flex-grow: 1;
		padding: 15px;
	}
}
</style>
