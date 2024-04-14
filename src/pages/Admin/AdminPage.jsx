import { useEffect, useState } from 'react';
import ChartAdmin from '../../components/Admin/ChartAdmin';
import * as OrderService from '../../services/order';

const AdminPage = () => {
	const [allOrder, setAllOrder] = useState([]);
	const getAllOrder = async () => {
		const res = await OrderService.getAllOrder();
		setAllOrder(res.data);
	};
	useEffect(() => {
		getAllOrder();
	}, []);
	return (
		<>
			<ChartAdmin allOrder={allOrder} />
		</>
	);
};

export default AdminPage;
