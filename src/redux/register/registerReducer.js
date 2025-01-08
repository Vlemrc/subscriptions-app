const initialState = {
    loading: false, 
    success: false, 
    error: null,   
    utilisateur: null,
};

const registerReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REGISTER_REQUEST':
            return {
                ...state,
                loading: true,
                success: false,
                error: null,
                utilisateur: null,
            };
        case 'REGISTER_SUCCESS':
            return {
                ...state,
                loading: false,
                success: true,
                error: null,
                utilisateur: action.payload,
            };
        case 'REGISTER_FAILURE':
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload, 
            };
        case 'REGISTER_RESET':
            return initialState;
        default:
            return state;
    }
};

export default registerReducer;
