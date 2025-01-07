import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  subscriptions: [],
};

const subscriptionSlice = createSlice({
  name: 'subscriptions',
  initialState,
  reducers: {
    addSubscription: (state, action) => {
      state.subscriptions.push(action.payload);
    },
    setSubscriptions: (state, action) => {
      state.subscriptions = action.payload;
    },
  },
});

export const { addSubscription, setSubscriptions } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;
