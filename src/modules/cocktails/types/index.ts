export interface ICocktailItem {
	id: number
	slug: string
	name: string
}

export interface IDrink {
	dateModified: string
	idDrink: string
	strAlcoholic: string
	strCategory: string
	strCreativeCommonsConfirmed: string
	strDrink: string
	strDrinkAlternate: any
	strDrinkThumb: string
	strGlass: any
	strIBA: any
	strImageAttribution: any
	strImageSource: any
	strIngredient1: string
	strIngredient2: string
	strIngredient3: any
	strIngredient4: any
	strIngredient5: any
	strIngredient6: any
	strIngredient7: any
	strIngredient8: any
	strIngredient9: any
	strIngredient10: any
	strIngredient11: any
	strIngredient12: any
	strIngredient13: any
	strIngredient14: any
	strIngredient15: any
	strInstructions: string
	strInstructionsDE: string
	strInstructionsES: string
	strInstructionsFR: string
	strInstructionsIT: string
	'strInstructionsZH-HANS': any
	strMeasure1: any
	strMeasure2: any
	strMeasure3: any
	strMeasure4: any
	strMeasure5: any
	strMeasure6: any
	strMeasure7: any
	strMeasure8: any
	strMeasure9: any
	strMeasure10: any
	strMeasure11: any
	strMeasure12: any
	strMeasure13: any
	strMeasure14: any
	strMeasure15: any
	strTags: string
	strVideo: any
}

export interface ICocktail { drinks: IDrink }