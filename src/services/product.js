import axios from 'axios';

export const createProduct = async data => {
	const res = await axios.post(
		`${import.meta.env.VITE_DATABASE_URL}/product/create-product`,
		data
	);
	return res.data;
};

export const getProductList = async (limit, search) => {
	let res = {};
	if (search?.length > 0) {
		res = await axios.get(
			`${
				import.meta.env.VITE_DATABASE_URL
			}/product/get-all-product?limit=${limit}&filter=name&filter=${search}`
		);
	} else {
		res = await axios.get(
			`${import.meta.env.VITE_DATABASE_URL}/product/get-all-product`
		);
	}
	return res.data;
};
