import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import { ICocktail, ICocktailItem } from '../types'
import { getCoctailList, getCoctail } from '../repositories'

export const useCocktailStore = defineStore(
	'CocktailStore',
	() => {
		const cocktailList = ref<ICocktailItem[]>()

		const _getCocktailList = computed(() => {
			return cocktailList.value || []
		})

		async function _fetchCocktailList() {
			try {
				if (cocktailList.value?.length) return
				const { data } = await getCoctailList()

				cocktailList.value = data
			} catch (error: any) {
				throw error
			}
		}

		const cocktails = ref<{ [key: string]: ICocktail }>({})

		const _getCocktail = computed(() => (slug: string) => {
			return cocktails.value[slug]
		})

		async function _fetchCocktail(slug: string) {
			try {
				if (!cocktails.value[slug]) {
					const { data } = await getCoctail(slug)
					cocktails.value[slug] = data
				}
			} catch (error: any) {
				throw error
			}
		}

		return {
			cocktailList,
			cocktails,
			_getCocktailList,
			_fetchCocktailList,
			_getCocktail,
			_fetchCocktail,
		}
	},
	{
		persist: true,
	},
)
