import axios from 'axios';

export const axiosJWT = axios.create();

export const login = async user => {
	const res = await axios.post(
		`${import.meta.env.VITE_DATABASE_URL}/user/login`,
		user
	);

	return res.data;
};

export const getDetailUser = async (id, accessToken) => {
	const res = await axiosJWT.get(
		`${import.meta.env.VITE_DATABASE_URL}/user/get-detail-user/${id}`,
		{
			headers: {
				token: `Bearer ${accessToken}`
			}
		}
	);
	return res.data;
};

export const refreshToken = async token => {
	const res = await axios.post(
		`${import.meta.env.VITE_DATABASE_URL}/user/get-new-token`,
		{},
		{
			headers: {
				token: `Bearer ${token}`
			}
		}
	);
	return res.data;
};
