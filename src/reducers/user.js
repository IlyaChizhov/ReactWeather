import {GET_USER} from '../constants'

const log = () => {
  return localStorage.getItem('userName')
}

export default function page(state = {name: log()}, action) {
const {payload ,type} = action
    switch (type) {
        case GET_USER:
            return { name: payload}

        default:
            return state;
    }

}