<template>
	<div class="cocktail-view">
		<div class="cocktail">
			<div v-if="getCocktail" class="drinks">
				<div v-for="drink in getCocktail.drinks" class="drink">
					<div class="drink__desc">
						<div class="drink__title">{{ drink.strDrink }}</div>
						<div v-if="drink.strTags" class="drink__tags">
              <span v-for="tag in drink.strTags.split(',')" :key="tag">{{ tag }}</span>
            </div>
						<div class="drink__category"><span>Category:</span> <span>{{ drink.strCategory }}</span></div>
						<div class="drink__alcoholic-type"><span>Alcoholic:</span> <span>{{ drink.strAlcoholic }}</span></div>
						<div class="drink__glass"><span>Glass:</span> <span>{{ drink.strGlass }}</span></div>

            <div class="head-3 drink__head-3">List of Ingridients</div>
						<div class="drink__ingridients">
							<div
								v-for="ingridient in getFieldsStartWith(drink, 'strIngredien')"
								class="drink__ingridient"
							>
								{{ ingridient }}
							</div>
						</div>
						<div class="drink__instructions">{{ drink.strInstructions }}</div>
					</div>
					<div class="drink__img">
						<img v-lazy="drink.strDrinkThumb" :alt="drink.strDrink" lazy-load />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute } from 'vue-router'

import { getFieldsStartWith } from '@/shared/utils'

import { useCocktailStore } from '../store'

const $route = useRoute()

const cocktailStore = useCocktailStore()

const getCocktail = computed(() => {
	return cocktailStore._getCocktail($route.params.slug as string)
})

watch(
	() => $route.params.slug,
	async () => {
		if ($route.params.slug) {
			await cocktailStore._fetchCocktail($route.params.slug as string)
		}
	},
	{
		immediate: true,
	},
)
</script>

<style lang="scss" scoped>
@import "@/app/styles/_variables";
@import "@/app/styles/_mixins";

.drink {
	border: 1px solid #020202;
	margin-bottom: 15px;
	padding: 13px 15px;
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;

  &__desc {
    max-width: 70%;
    flex-grow: 1;

    @include get-media($mobile, $tablet) {
      max-width: 100%;
      order: 2;
    }
  }

  &__title {
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 18px;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 12px;

    span {
      background: #e5e5e5;
      padding: 3px 5px;
      display: inline-block;
      border-radius: 8px;
      font-size: 12px;
    }
  }

  &__category,
  &__alcoholic-type,
  &__glass {
    span {
      &:first-child {
        font-weight: bold;
      }
    }
  }

  &__head-3 {
    margin-top: 16px;
    margin-bottom: 10px;
  }

  &__img {
    max-width: 28%;

    @include get-media($mobile, $tablet) {
      max-width: 100%;
      margin-bottom: 15px;
      order: 1;
    }

    img {
      width: 100%;
      max-width: 380px;
      margin: 0 auto;
    }
  }
}
</style>
