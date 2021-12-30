
const CODE_MESSAGE_MAP: { [key: number]: string } = {
    500: '',
    401: '',
}

export class HttpError extends Error {

    code: number = 500
    message: string = ''
    constructor(code?: number, message?: string) {
        super(message ?? '')
        this.code = code ?? 500
        this.message = message ?? CODE_MESSAGE_MAP[this.code] ?? ''
    }
}