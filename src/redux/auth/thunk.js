import {api} from "../../api";
import {setAuthToken, setMe} from "./index";

const setToken = (res) => (dispatch) => {
    const token = res.data.auth_token
    dispatch(setAuthToken(token))
    localStorage.setItem("token", token)
}

export const authLogin = (type, data) => (dispatch) => {
    if (type === "email") {
        return api.authApi.tokenEmail(data).then(res => dispatch(setToken(res)))
    } else {
        return api.authApi.tokenPhone(data).then(res => dispatch(setToken(res)))
    }
}

export const authGetMe = () => (dispatch) => {
    return api.authApi.getMe().then(res => dispatch(setMe(res.data)))
}