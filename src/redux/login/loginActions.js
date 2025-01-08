export const loginRequest = () => ({
    type: 'LOGIN_REQUEST',
  });
  
  export const loginSuccess = (data) => ({
    type: 'LOGIN_SUCCESS',
    payload: data
  });
  
  export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
  });
  
  export const loginReset = () => ({
    type: 'LOGIN_RESET',
  });