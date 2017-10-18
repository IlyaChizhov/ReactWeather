import {GET_WEATHER} from '../constants'

export default function weather(state = {}, action) {
    const {payload, type} = action

    switch (type) {
        case GET_WEATHER:
            return payload
        default:
            return state
    }
}