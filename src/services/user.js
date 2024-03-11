import axios from 'axios';

export const axiosJWT = axios.create();

export const login = async user => {
	const res = await fetch(
		`${import.meta.env.VITE_DATABASE_URL}/user/login`,
		user
	);
	const data = await res.json();
	return data;
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
