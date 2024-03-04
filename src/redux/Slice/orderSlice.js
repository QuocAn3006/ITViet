import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	orderItems: [],
	orderItemsSelected: []
};

export const orderSlice = createSlice({
	name: 'order',
	initialState,
	reducers: {
		addOrderProduct: (state, action) => {
			const { orderItem } = action.payload;
			const itemOrder = state?.orderItems.find(
				item => item.product === orderItem.product
			);
			if (itemOrder) {
				if (itemOrder.amount <= itemOrder.countInstock) {
					itemOrder.amount += orderItem?.amount;
				}
			} else {
				state?.orderItems?.push(orderItem);
			}
		},
		increaseAmount: (state, action) => {
			const { productId } = action.payload;
			const itemOrder = state?.orderItems.find(
				item => item.productId === productId
			);
			itemOrder.amount++;
		}
	}
});

export const { addOrderProduct } = orderSlice.actions;
export default orderSlice.reducer;
