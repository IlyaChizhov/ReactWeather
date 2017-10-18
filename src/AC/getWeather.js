import {GET_WEATHER} from '../constants'

export function getWeather(response) {
    return {
        type: GET_WEATHER,
        payload: response
    }
}