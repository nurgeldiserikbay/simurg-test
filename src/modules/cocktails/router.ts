import type { RouteRecordRaw, Router } from 'vue-router'

const moduleRoute: RouteRecordRaw = {
	path: '/',
	name: 'CocktailMain',
	component: () => import('./pages/CocktailMain.vue'),
	children: [
		{
			path: '/:slug',
			name: 'CocktailView',
			component: () => import('./pages/CocktailView.vue'),
		},
	],
}

export default (router: Router) => {
	router.addRoute('Default', moduleRoute)
	router.replace(router.currentRoute.value.fullPath)
}
