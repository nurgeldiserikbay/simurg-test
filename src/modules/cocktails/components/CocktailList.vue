<template>
	<div class="cocktail-list">
		<router-link
			v-for="cocktail in cocktailStore._getCocktailList"
			:key="cocktail.slug"
			:to="`/${cocktail.slug}`"
			class="cocktail-list__item"
		>
			{{ cocktail.name }}
		</router-link>
	</div>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

import { useCocktailStore } from '../store'

const $route = useRoute()
const $router = useRouter()

const cocktailStore = useCocktailStore()

onBeforeMount(async () => {
	await cocktailStore._fetchCocktailList()

	if (!$route.params.slug) {
		$router.push(`/${cocktailStore._getCocktailList[0].slug}`)
	}
})
</script>

<style lang="scss" scoped>
@import "@/app/styles/_variables";
@import "@/app/styles/_mixins";

.cocktail-list {
	&__item {
		display: block;
		font-size: 1.8rem;
		font-weight: bold;
		line-height: 1.3;
		margin-bottom: 15px;
		text-decoration: none;
		color: #000;

		@include get-media($mobile, $tablet) {
			display: inline-block;
			font-size: 1.4rem;
			margin-right: 15px;
		}

		&::first-letter {
			text-transform: capitalize;
		}

		&:visited {
			color: #000;
		}

		&:active,
		&.router-link-exact-active {
			color: green;
		}
	}
}
</style>
