const initialState = {
  loading: false,
  success: false,
  error: null,
  subscriptions: [],
};

const subscriptionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SUBSCRIPTION_REQUEST':
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case 'ADD_SUBSCRIPTION_SUCCESS':
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        subscriptions: [...state.subscriptions, action.payload],
      };
    case 'ADD_SUBSCRIPTION_FAILURE':
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default subscriptionsReducer;