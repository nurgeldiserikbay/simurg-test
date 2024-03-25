import HttpClient, { type IHttpClient } from '../network/http'
import api from '@/app/plugins/axios'

interface commonServices {
	http: IHttpClient
}

export interface servicesType {
	common: commonServices
}

const services: servicesType = {
	common: {
		http: new HttpClient(api),
	},
}

export default services
