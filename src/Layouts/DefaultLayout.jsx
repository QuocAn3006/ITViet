import Navbar from '../components/Navbar';

/* eslint-disable react/prop-types */
const DefaultLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default DefaultLayout;
