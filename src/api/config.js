import axios from "axios"
import history from "../helpers/history"

export const request = (method, url, data = {}, auth = true) => {
    const api = process.env.REACT_APP_API
    return http(method, api + url + "/", data, auth).catch(error => {
        if (error.response.status === 401 && auth === true) {
            history.push("/logout")
        }
        return Promise.reject(error)
    })
}

const http = (method, url, data = {}, auth = true) => {
    let query = "?"
    if (method === "get") {
        Object.keys(data).forEach(key => {
            if (typeof data[key] !== 'function') {
                query += key + "=" + data[key] + "&"
            }
        })
        query = query.substring(0, query.length - 1)
    }

    const options = {
        url: url + query,
        method: method,
        data: method !== 'get' ? data : {},
        headers: {
            "Content-Type": "application/json",
            "Authorization": auth ? "Token " + getToken() : ""
        }
    }

    const instance = axios.create(options)
    if (auth) {
        instance.interceptors.request.use(request => {
            const token = getToken()
            if (token === "") {
                return Promise.reject("empty token")
            }
            return request
        }, error =>{
            return Promise.reject(error)
        })
    }
    return instance.request(options)
}

const getToken = () => {
    return localStorage.getItem("token")
}
