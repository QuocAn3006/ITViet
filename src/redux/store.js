import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './Slice/orderSlice';
import userSlice from './Slice/userSlice';

export const store = configureStore({
	reducer: {
		order: orderReducer,
		user: userSlice
	}
});
