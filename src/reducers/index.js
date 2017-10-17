import { combineReducers } from 'redux'
import user from './user'
import weather from './weather'
import preloader from './preloader'

export default combineReducers({
    user,
    weather,
    preloader
})