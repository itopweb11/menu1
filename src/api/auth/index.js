import {request} from "../config";

async function tokenEmail(data = {}) {
    return request('post', "/auth/token-email", data, false)
}

async function tokenPhone(data = {}) {
    return request('post', "/auth/token-phone", data, false)
}

export const authApi = {
    tokenEmail,
    tokenPhone
}