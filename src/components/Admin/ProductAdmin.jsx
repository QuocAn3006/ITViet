import { Icon } from '@iconify/react';
import { Form, Modal, Table, Upload, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect, useState } from 'react';
import { getBase64 } from '../../utils';
import * as ProductService from '../../services/product';

const ProductAdmin = () => {
	const initial = () => ({
		name: '',
		image: '',
		brand: '',
		price: ''
	});
	const [openModal, setOpenModal] = useState(false);
	const [product, setProduct] = useState(initial());
	const [dataCreateProduct, setDataCreateProduct] = useState({ data: null });
	const [allProduct, setAllProduct] = useState([]);
	const [form] = useForm();

	const handleOnChange = e => {
		setProduct({ ...product, [e.target.name]: e.target.value });
	};
	const handleCancelModal = () => {
		setOpenModal(false);
		setProduct({
			name: '',
			image: '',
			brand: '',
			price: ''
		});
		form.resetFields();
	};

	const handleOnChangeImage = async ({ fileList }) => {
		const file = fileList[0];
		if (!file.url && !file.preview) {
			file.preview = await getBase64(file.originFileObj);
		}
		setProduct({ ...product, image: file.preview });
	};

	const createProductApi = async data => {
		const { name, image, brand, price } = data;
		const res = await ProductService.createProduct({
			name,
			image,
			brand,
			price
		});
		setDataCreateProduct(res);
	};

	const handleCreateProduct = () => {
		const params = {
			name: product.name,
			image: product.image,
			brand: product.brand,
			price: product.price
		};
		createProductApi(params);
	};

	useEffect(() => {
		if (dataCreateProduct.status === 'OK') {
			message.success('Thêm sản phẩm thành công');
			handleCancelModal();
		}
		if (dataCreateProduct.status === 'ERR') {
			message.error('Thêm sản phẩm không thành công');
		}
	}, [dataCreateProduct.status]);

	const getProductList = async () => {
		const res = await ProductService.getProductList();
		setAllProduct(res.data);
	};

	useEffect(() => {
		getProductList();
	}, []);

	const columns = [
		{
			title: 'Tên sản phẩm',
			dataIndex: 'name',
			sorter: (a, b) => a.name.length - b.name.length
		},
		{
			title: 'Giá',
			dataIndex: 'price',
			sorter: (a, b) => a.price - b.price,
			filters: [
				{
					text: '>= 50',
					value: '>='
				},
				{
					text: '<= 50',
					value: '<='
				}
			],

			onFilter: (value, record) => {
				if (value === '>=') {
					return record.price >= 50;
				} else return record.price <= 50;
			}
		},
		{
			title: 'Nhóm sản phẩm',
			dataIndex: 'brand'
		}
	];

	const dataTables =
		allProduct?.length > 0 &&
		allProduct?.map(item => {
			return { ...item, key: item._id };
		});
	return (
		<div className='bg-[#f0f2f5] w-full h-screen'>
			<div className='max-w-7xl mx-auto pt-5'>
				<div className='flex justify-between items-center'>
					<span className='text-xl'>Hàng hóa</span>
					<div className='flex items-center gap-2'>
						<button
							onClick={() => setOpenModal(true)}
							className='bg-green-600 text-white font-semibold text-base px-2 py-3 rounded-md flex items-center gap-1'
						>
							<Icon icon='ic:baseline-plus' />
							Thêm mới
						</button>

						<button className='bg-green-600 text-white font-semibold text-base px-2 py-3 rounded-md flex items-center gap-1'>
							<Icon
								icon='clarity:export-solid'
								height={19}
							/>
							Xuất file
						</button>
					</div>
				</div>

				<div className='mt-3'>
					<Table
						columns={columns}
						dataSource={dataTables}
					/>
				</div>
			</div>
			<Modal
				title='Tạo sản phẩm mới'
				open={openModal}
				footer={null}
				onCancel={handleCancelModal}
				className='w-[700px]'
			>
				<Form
					form={form}
					labelCol={{ span: 4 }}
					wrapperCol={{ span: 20 }}
					style={{ maxWidth: 685 }}
					onFinish={handleCreateProduct}
				>
					<Form.Item
						label='Tên hàng'
						name='name'
						rules={[
							{
								required: true,
								message: 'Please input your name product!'
							}
						]}
					>
						<input
							value={product.name}
							onChange={handleOnChange}
							name='name'
							className='border-b-2 border-b-[#ccc] w-full px-2 py-1 focus:outline-none focus:border-b-[#4bac4d]'
						/>
					</Form.Item>

					<Form.Item
						label='Loại thực đơn'
						name='brand'
						rules={[
							{
								required: true,
								message: 'Please input your name brand!'
							}
						]}
					>
						<input
							value={product.brand}
							onChange={handleOnChange}
							name='brand'
							className='border-b-2 border-b-[#ccc] w-full px-2 py-1 focus:outline-none focus:border-b-[#4bac4d]'
						/>
					</Form.Item>

					<Form.Item
						label='Giá bán'
						name='price'
						rules={[
							{
								required: true,
								message: 'Please input your price!'
							}
						]}
					>
						<input
							value={product.price}
							onChange={handleOnChange}
							name='price'
							className='border-b-2 border-b-[#ccc] w-full px-2 py-1 focus:outline-none focus:border-b-[#4bac4d]'
						/>
					</Form.Item>

					<Form.Item
						label='Ảnh sản phẩm'
						name='image'
						rules={[
							{
								required: true,
								message: 'Please input your name product!'
							}
						]}
					>
						<div>
							<Upload
								listType='picture-card'
								onChange={handleOnChangeImage}
								maxCount={1}
							>
								<Icon
									icon='material-symbols:upload'
									height={20}
								/>
							</Upload>
						</div>
					</Form.Item>

					<Form.Item
						wrapperCol={{
							offset: 16,
							span: 16
						}}
					>
						<button
							className='bg-primary p-2 font-semibold w-full rounded-md text-white'
							type='primary'
						>
							Submit
						</button>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
};

export default ProductAdmin;
