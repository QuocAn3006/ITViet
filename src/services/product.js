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

export const getAllType = async () => {
	const res = await axios.get(
		`${import.meta.env.VITE_DATABASE_URL}/product/get-all-type`
	);
	return res.data;
};

export const getAllCategory = async () => {
	const res = await axios.get(
		`${import.meta.env.VITE_DATABASE_URL}/product/get-all-category`
	);
	return res.data;
};

export const getDetailProduct = async id => {
	const res = await axios.get(
		`${import.meta.env.VITE_DATABASE_URL}/product/get-details-product/${id}`
	);
	return res.data;
};

export const updatedProduct = async (id, data) => {
	const res = await axios.put(
		`${import.meta.env.VITE_DATABASE_URL}/product/update-product/${id}`,
		data
	);
	return res;
};
