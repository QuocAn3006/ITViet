import { configureStore } from '@reduxjs/toolkit';
import orderReducer from './Slice/orderSlice';

export const store = configureStore({
	reducer: {
		order: orderReducer
	}
});
