import {request} from "../config";

async function tokenEmail(data = {}) {
    return request('post', "/auth/token-email", data, false)
}

async function tokenPhone(data = {}) {
    return request('post', "/auth/token-phone", data, false)
}

async function getMe() {
    return request('get', "/users/me", {}, true)
}
async function register(data = {}) {
    return request('post', "/users", data, false)
}

export const authApi = {
    tokenEmail,
    tokenPhone,
    getMe,
    register
}
