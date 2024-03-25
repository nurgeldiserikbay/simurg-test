export type Recordable<T = any> = {
	[x: string]: T
}

export interface DefaultModule<T = Recordable> {
	readonly default: T
}
