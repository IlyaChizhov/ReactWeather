import {TOGGLE_PRELOADER} from '../constants'
export default function preloader(state = true, action) {

    switch (action.type) {
        case TOGGLE_PRELOADER:
            return state = false

        default:
            return state;
    }

}