import type {
	Axios,
	AxiosError,
	InternalAxiosRequestConfig,
	AxiosResponse,
} from 'axios'
import { onError } from '@/shared/network/error-handler'

export interface IHttpParams extends InternalAxiosRequestConfig {}

export interface IHttpResponse extends AxiosResponse {
	meta?: any
}

export interface IHttpClient {
	get(url: string, params?: IHttpParams): Promise<IHttpResponse>

	post(url: string, params: IHttpParams, config?: any): Promise<IHttpResponse>

	put(url: string, params: IHttpParams): Promise<IHttpResponse>

	patch(url: string, params: IHttpParams, config?: any): Promise<IHttpResponse>

	delete(url: string, params?: IHttpParams): Promise<IHttpResponse>

	fakeGet(data: any): Promise<IHttpResponse>
}

export default class HttpClient implements IHttpClient {
	constructor(private $http: Axios) {
		this._initializeInterceptors()
	}

	private _initializeInterceptors() {
		this.$http.interceptors.request.use(
			HttpClient._handleRequest,
			this._handleRequestError,
		)
		this.$http.interceptors.response.use(
			this._handleResponse,
			HttpClient._handleResponseError.bind(this),
		)
	}

	private static _handleRequest(
		config: InternalAxiosRequestConfig,
	): InternalAxiosRequestConfig {
		return config
	}

	private _handleRequestError = (error: AxiosError) => Promise.reject(error)
	
	private _handleResponse = (response: AxiosResponse) => response

	private static _handleResponseError(error: AxiosError) {
		const code = Number(error.response?.status || error.code)
		return Promise.reject(onError(code, error))
	}

	async get(url: string, params?: IHttpParams) {
		try {
			return await this.$http.get(url, params?.params)
		} catch (e) {
			return Promise.reject(e)
		}
	}

	async post(url: string, params: IHttpParams, config?: any) {
		try {
			return await this.$http.post(url, params?.params, config)
		} catch (e) {
			return Promise.reject(e)
		}
	}

	async put(url: string, params: IHttpParams) {
		try {
			return await this.$http.put(url, params?.params)
		} catch (e) {
			return Promise.reject(e)
		}
	}

	async patch(url: string, params: IHttpParams, config?: any) {
		try {
			return await this.$http.patch(url, params?.params, config)
		} catch (e) {
			return Promise.reject(e)
		}
	}

	async delete(url: string, params?: IHttpParams) {
		try {
			return await this.$http.delete(url, params?.params)
		} catch (e) {
			return Promise.reject(e)
		}
	}

	fakeGet<T>(data: any): Promise<T> {
		return new Promise<T>((resolve) => {
			resolve(data)
		})
	}
}
