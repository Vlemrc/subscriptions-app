const initialState = {
    loading: false, 
    success: false, 
    error: null,   
    utilisateur: null,
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_REQUEST':
            return {
                ...state,
                loading: true,
                success: false,
                error: null,
                utilisateur: null,
            };
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loading: false,
                success: true,
                error: null,
                utilisateur: action.payload,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload, 
            };
        case 'LOGIN_RESET':
            return initialState;
        default:
            return state;
    }
};

export default loginReducer;