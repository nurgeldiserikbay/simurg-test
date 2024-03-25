import type { Router } from 'vue-router'
import type { DefaultModule } from '@/shared/types/common'

interface AppModule {
	router?: (router: Router) => void
}

const modules = import.meta.glob<DefaultModule<AppModule>>(
	'@/modules/*/index.ts',
)

export function registerModules(router: Router) {
	const registerModule = (module: AppModule) => {
		if (module.router) module.router(router)
	}

	Object.keys(modules).forEach(async (moduleKey) => {
		const module = await modules[moduleKey]()
		registerModule(module.default)
	})
}
