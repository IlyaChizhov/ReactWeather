const initialState = {
    preloader: true
}

export default function preloader(state = initialState, action) {

    switch (action.type) {
        case 'TOGGLE_PRELOADER':
            return { ...state, preloader: false}

        default:
            return state;
    }

}