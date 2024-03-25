import services from '@/shared/services'

import { ICocktail, ICocktailItem } from '../types'

const coctailList: ICocktailItem[] = [
	{
		id: 0,
		slug: 'margarita',
		name: 'margarita',
	},
	{
		id: 1,
		slug: 'mojito',
		name: 'mojito',
	},
	{
		id: 2,
		slug: 'a1',
		name: 'a1',
	},
	{
		id: 3,
		slug: 'kir',
		name: 'kir',
	},
]

export const getCoctailList = async (): Promise<{ data: ICocktailItem[] }> => {
	return new Promise((resolve) => {
		resolve({ data: coctailList })
	})
}

export const getCoctail = async (
	slug: string,
): Promise<{ data: ICocktail }> => {
	return await services.common.http.get(`/1/search.php?s=${slug}`)
}
