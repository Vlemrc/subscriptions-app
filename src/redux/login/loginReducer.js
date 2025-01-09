const initialState = {
    loading: false, 
    success: false, 
    error: null,   
    utilisateur: null,
    isAuthenticated: false,
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
                isAuthenticated: false,
            };
        case 'LOGIN_SUCCESS':
            localStorage.setItem('user', JSON.stringify(action.payload));
            localStorage.setItem('isAuthenticated', JSON.stringify(true));
            return {
                ...state,
                loading: false,
                success: true,
                error: null,
                utilisateur: action.payload,
                isAuthenticated: true,
            };
        case 'LOGIN_FAILURE':
            return {
                ...state,
                loading: false,
                success: false,
                error: action.payload,
                isAuthenticated: false,
            };
        case 'LOGIN_RESET':
            return initialState;
        default:
            return state;
    }
};

export default loginReducer;