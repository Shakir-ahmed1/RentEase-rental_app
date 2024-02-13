import * as api from '../api/api'
import { REGISTER, LOGIN, ERROR } from '../constants/actionTypes'

export const signIn = (formData) => async (dispatch) => {
    try {
        const response = await api.signIn(formData);
        dispatch({type: LOGIN, payload:response.config.data})
    } catch (error) {
        console.log(error.message)
        dispatch({type:ERROR, payload:error})
}
}

export const signUp = (formData) => async (dispatch) => {
    try {
        const response = await api.signUp(formData);
        dispatch({type: REGISTER, payload:response.config.data})
    } catch (error) {
        dispatch({type:ERROR, payload:error})
    }
}

