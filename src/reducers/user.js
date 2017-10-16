const log = () => {
  return localStorage.getItem('userName')
}


const initialState = {
        user: {
            name: log()
        }
};


export default function page(state = initialState, action) {

    switch (action.type) {
        case 'GET_USER':
            return {...state, user: action.payload}

        default:
            return state;
    }

}