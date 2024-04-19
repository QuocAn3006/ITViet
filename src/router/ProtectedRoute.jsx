import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';

// eslint-disable-next-line react/prop-types
export const ProtectedRoute = ({ children }) => {
	const navigate = useNavigate();
	const user = useSelector(state => state?.user);
	useEffect(() => {
		if (!user.accessToken) {
			navigate(config.routes.login);
		}
	}, [user]);

	return <>{children}</>;
};
