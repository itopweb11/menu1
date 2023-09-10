import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    me: {
        id: 0,
        phone: "",
        email: "",
        first_name: "",
        last_name: "",
    },
    token: localStorage.getItem("token")
}

export const authStore = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthToken: (state, action) => {
            state.token = action.payload
        },
        setMe: (state, action) => {
            state.me = action.payload
        }
    },
})

const {actions, reducer} = authStore;

export const {setAuthToken, setMe} = actions

export default reducer