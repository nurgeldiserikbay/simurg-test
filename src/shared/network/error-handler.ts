interface messageType {
	[key: number]: string
}

export function onError(code: keyof messageType, reject: any) {
	const error = {
		statusCode: Number(code),
		message: reject.response.data.data.message,
	}

	return error
}
