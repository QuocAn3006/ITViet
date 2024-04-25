import axios from 'axios';

export const getDetailStore = async idStore => {
	const res = await axios.get(
		`${import.meta.env.VITE_DATABASE_URL}/store/get-detail-store/${idStore}`
	);
	return res.data;
};

export const getAllStore = async () => {
	const res = await axios.get(
		`${import.meta.env.VITE_DATABASE_URL}/store/get-all-store`
	);
	return res.data;
};

export const getProductStore = async idStore => {
	const res = await axios.get(
		`${
			import.meta.env.VITE_DATABASE_URL
		}/store/get-products-store/${idStore}/products`
	);
	return res.data;
};
