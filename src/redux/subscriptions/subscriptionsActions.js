export const addSubscriptionRequest = () => ({
  type: 'ADD_SUBSCRIPTION_REQUEST',
});

export const addSubscriptionSuccess = (data) => ({
  type: 'ADD_SUBSCRIPTION_SUCCESS',
  payload: data,
});

export const addSubscriptionFailure = (error) => ({
  type: 'ADD_SUBSCRIPTION_FAILURE',
  payload: error,
});