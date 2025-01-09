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

export const fetchSubscriptionsRequest = () => ({
  type: 'FETCH_SUBSCRIPTIONS_REQUEST',
});

export const fetchSubscriptionsSuccess = (data) => ({
  type: 'FETCH_SUBSCRIPTIONS_SUCCESS',
  payload: data,
});

export const fetchSubscriptionsFailure = (error) => ({
  type: 'FETCH_SUBSCRIPTIONS_FAILURE',
  payload: error,
});