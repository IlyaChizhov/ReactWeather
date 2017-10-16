const initialState = {
    response: {}
}

export default function weather(state = {}, action) {
    switch(action.type) {
        case 'GET_WEATHER':
            return {...state, response: action.payload}
    }
    return state;
}