import { createApp } from 'vue'
import App from '@/app/App.vue'
import { router, setupRouter } from '@/app/router'
import { setupStore } from '@/shared/stores'
import { registerModules } from '@/app/providers/register-modules'
import VueLazyLoad from 'vue3-lazyload'

import '@/app/styles/style.scss'

export function init() {
	const app = createApp(App)

	app.use(VueLazyLoad, {})

	setupStore(app)
	registerModules(router)
	setupRouter(app)
	app.mount('#app')
}
