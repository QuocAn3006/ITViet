import NavbarAdmin from '../components/Admin/NavbarAdmin';

/* eslint-disable react/prop-types */
const AdminLayout = ({ children }) => {
	return (
		<>
			<NavbarAdmin />
			{children}
		</>
	);
};

export default AdminLayout;
