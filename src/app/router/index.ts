import type { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

export const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'active',
})

export function setupRouter(app: App) {
	app.use(router)
}
