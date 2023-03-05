import * as api from '../api'
import { setCurrentUser } from './currentUser'

export const addContact = (id, contactData) => async (dispatch) => {
    try {
        const { data } = await api.addContact(id, contactData)
        const tempObj = {
            result: data.newUserDetail,
            token: JSON.parse(localStorage.getItem('Profile')).token
        }
        dispatch({type: 'AUTH', data: tempObj})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    } catch (error) {
        console.log(error)
    }
}

export const deleteContact = (id, contactData) => async (dispatch) => {
    try {
        const { data } = await api.deleteContact(id, contactData)
        const tempObj = {
            result: data.newUserDetail,
            token: JSON.parse(localStorage.getItem('Profile')).token
        }
        dispatch({type: 'AUTH', data: tempObj})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    } catch (error) {
        console.log(error)
    }
}

export const editContact = (id, contactData) => async (dispatch) => {
    try {
        const { data } = await api.editContact(id, contactData)
        const tempObj = {
            result: data.newUserDetail,
            token: JSON.parse(localStorage.getItem('Profile')).token
        }
        dispatch({type: 'AUTH', data: tempObj})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('Profile'))))
    } catch (error) {
        console.log(error)
    }
}
