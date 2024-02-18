import * as api from '../api/api'
import { REGISTER, LOGIN, ERROR, UPDATEUSER } from '../constants/actionTypes'


export const signIn = (formData, navigate) => async (dispatch) => {
    try {
        const response = await api.signIn(formData);
        console.log(response)
        dispatch({type: LOGIN, payload:response.data})
        navigate('/')
    } catch (error) {
        dispatch({type:ERROR, payload:error.response.data.error})
        console.log(error)
}
}

export const signUp = (formData, navigate) => async (dispatch) => {
    try {
        const response = await api.signUp(formData);
        console.log(response)
        dispatch({type: REGISTER, payload:response.data.user})
        navigate('/')
    } catch (error) {
        dispatch({type:ERROR, payload:error})
    }
}

export const updatedUser = (userId, userData) => async (dispatch) => {
    try {
        const response = await api.updateUser(userId, userData);
        console.log(response)
        dispatch({type: UPDATEUSER, payload:response.data})
    } catch (error) {
        console.log(error)
    }
}