import * as api from '../api'
import { setCurrentUser } from './currentUser'
import bcrypt from "bcryptjs/dist/bcrypt.js";

export const signup = (authData, password, navigate) => async (dispatch) => {
    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const { data } = await api.signUp({...authData, hashedPassword})
        dispatch({type: 'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate(`/Contacts/${data.result[0]._id}`)
    } catch (error) {
        console.log(error)
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const { data } = await api.logIn(authData)
        dispatch({type: 'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
        navigate(`/Contacts/${data.result[0]._id}`)
    } catch (error) {
        console.log(error)
    }
}
