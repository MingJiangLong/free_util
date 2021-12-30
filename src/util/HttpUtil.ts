import axios, { AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    }
})


function get<T>(url: string, params?: any, config?: AxiosRequestConfig) {
    return axiosInstance.get<T>(url, {
        ...config,
        params
    })
}
function post<T>(url: string, data?: any, config?: AxiosRequestConfig) {
    return axiosInstance.post<T>(url, data, config)
}

export const HttpUtil = {
    get,
    post
}