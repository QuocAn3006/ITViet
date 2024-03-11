import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: '',
	email: '',
	isAdmin: false,
	accessToken: '',
	refreshToken: ''
};

export const userSlice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		updatedUser: (state, action) => {
			const {
				name = '',
				email = '',
				isAdmin,
				accessToken = '',
				refreshToken = ''
			} = action.payload;

			state.name = name ? name : state.name;
			state.email = email ? email : state.email;
			state.isAdmin = isAdmin ? isAdmin : state.isAdmin;
			state.accessToken = accessToken ? accessToken : state.accessToken;
			state.refreshToken = refreshToken
				? refreshToken
				: state.refreshToken;
		},

		resetUser: state => {
			(state.name = ''),
				(state.email = ''),
				(state.isAdmin = ''),
				(state.accessToken = ''),
				(state.refreshToken = '');
		}
	}
});

export const { updatedUser, resetUser } = userSlice.actions;
export default userSlice.reducer;
