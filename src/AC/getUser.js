import {GET_USER} from '../constants'

export function getUser(user) {
    return {
        type: GET_USER,
        payload: user
    }

}