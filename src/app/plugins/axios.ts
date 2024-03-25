import axios, { type AxiosInstance } from 'axios'

const api: AxiosInstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	headers: {
		'Content-type': 'application/json',
	},
})

export default api
