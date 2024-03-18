/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const [token, setToken_] = useState(
		JSON.parse(localStorage.getItem('accessToken'))
	);

	const setToken = newToken => {
		setToken_(newToken);
	};

	useEffect(() => {
		if (token) {
			axios.defaults.headers.common['token'] = `Bearer ${token}`;
			localStorage.setItem('token', JSON.stringify(token));
		} else {
			delete axios.defaults.headers.common['token'];
			localStorage.removeItem('token');
		}
	}, [token]);

	const contextValue = useMemo(
		() => ({
			token,
			setToken
		}),
		[token]
	);

	return (
		<AuthContext.Provider value={contextValue}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContext);
};

export default AuthProvider;
