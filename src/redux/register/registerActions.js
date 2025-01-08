export const registerRequest = () => ({
  type: 'REGISTER_REQUEST',
});

export const registerSuccess = (data) => ({
  type: 'REGISTER_SUCCESS',
  payload: data
});

export const registerFailure = (error) => ({
  type: 'REGISTER_FAILURE',
  payload: error,
});

export const registerReset = () => ({
  type: 'REGISTER_RESET',
});


