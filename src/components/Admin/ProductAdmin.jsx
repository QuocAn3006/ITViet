import { Icon } from '@iconify/react';
import { Form, Modal, Table, Upload, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { useEffect, useState } from 'react';
import { getBase64 } from '../../utils';
import * as ProductService from '../../services/product';
import { Excel } from 'antd-table-saveas-excel';

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
	const [typeProduct, setTypeProduct] = useState([]);
	const [category, setCategory] = useState([]);
	const [rowSelected, setRowSelected] = useState('');
	const [searchValue, setSearchValue] = useState('');
	const [loading, setLoading] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);
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
		let res = {};
		setLoading(true);
		try {
			if (searchValue.length > 0) {
				res = await ProductService.getProductList(4, searchValue);
			} else {
				res = await ProductService.getProductList();
			}
			setAllProduct(res.data);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};
	// update product

	const handleUpdateProduct = async () => {
		setIsUpdating(true);
		try {
			const res = await ProductService.updatedProduct(rowSelected, {
				...productDetail
			});
			setDataUpdateProduct(res);
			if (res.statusText === 'OK') {
				message.success('Sửa sản phẩm thành công');
				handleCancelUpdateModal();
				getProductList();
			} else {
				message.error('Sửa sản phẩm thất bại');
			}
		} catch (error) {
			console.error(error);
		} finally {
			setIsUpdating(false);
		}
	};

	const getProductDetail = async id => {
		const res = await ProductService.getDetailProduct(id);
		setProductDetail(res.data);
	};
	const getAllType = async () => {
		const res = await ProductService.getAllType();
		setTypeProduct(res);
	};

	const getAllCategory = async () => {
		const res = await ProductService.getAllCategory();
		setCategory(res);
	};
	useEffect(() => {
		if (rowSelected) {
			getProductDetail(rowSelected);
		}
	}, [openUpdateModal, rowSelected]);
	useEffect(() => {
		if (!openModal) {
			form.setFieldsValue(productDetail);
		} else {
			form.setFieldsValue(initial());
		}
	}, [openModal, productDetail, form]);

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
		},
		{
			title: 'Loại hàng',
			dataIndex: 'category'
		},
		{
			title: 'Action',
			dataIndex: 'action',
			render: renderAction
		}
	];

	const dataTables =
		allProduct?.length > 0 &&
		allProduct?.map(item => {
			return { ...item, key: item._id };
		});

	const expandRowRender = () => {
		return (
			<div
				className={`flex items-center gap-2 border border-[#4bac4d] p-1`}
			>
				<div className='min-h-[290px] p-3 w-[35%] flex items-center flex-col'>
					<h1 className='text-lg text-primary font-semibold mb-8'>
						{productDetail.name}
					</h1>
					<img
						src={productDetail.image}
						alt='image'
						loading='lazy'
					/>
				</div>

				<div className='flex flex-1 flex-col gap-3'>
					<div className='flex flex-col gap-3'>
						<div className='border-b border-b-[#ccc] pb-2 flex items-center gap-2'>
							<span>Mã hàng hóa: </span>
							<span className='font-semibold'>
								{productDetail._id}
							</span>
						</div>

						<div className='border-b border-b-[#ccc] pb-2 flex items-center gap-2'>
							<span>Loại thực đơn: </span>
							<span className='font-semibold'>
								{productDetail.brand}
							</span>
						</div>

						<div className='border-b border-b-[#ccc] pb-2 flex items-center gap-2'>
							<span>Nhóm hàng: </span>
							<span className='font-semibold'>
								{productDetail.category}
							</span>
						</div>

						<div className='border-b border-b-[#ccc] pb-2 flex items-center gap-2'>
							<span>Giá bán: </span>
							<span className='font-semibold'>
								{convertPrice(productDetail.price)}
							</span>
						</div>
					</div>

					<div className='flex justify-end gap-2'>
						<button
							onClick={() => setOpenUpdateModal(true)}
							className='px-[20px] py-[7px] text-white bg-[#4bac4d] font-medium rounded-md flex items-center gap-1'
						>
							<Icon
								icon='material-symbols:check-box'
								height={18}
							/>
							Cập nhật
						</button>

						<button
							onClick={() => setOpenDeleteModal(true)}
							className='px-[20px] py-[7px] text-white bg-[#db4e65] font-medium rounded-md flex items-center gap-1'
						>
							<Icon
								icon='ph:trash-light'
								height={18}
							/>
							Xóa
						</button>
					</div>
				</div>
			</div>
		);
	};

	const exportExcel = () => {
		const excel = new Excel();
		excel
			.addSheet('Danh sách sản phẩm')
			.addColumns(columns)
			.addDataSource(dataTables, { str2Percent: true })
			.saveAs('DSSanPham.xlsx');
	};
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
							<Spin
								spinning={loading}
								delay={500}
							>
								<Table
									columns={columns}
									dataSource={dataTables}
									onRow={record => {
										return {
											onClick: () => {
												setRowSelected(record._id);
												setOpenUpdateModal(true);
											}
										};
									}}
								/>
							</Spin>
							{rowSelected && <span>{rowSelected}</span>}
						</div>
					</div>
				</div>
			</div>
			<Modal
				title='Tạo sản phẩm mới'
				open={openModal}
				footer={null}
				onCancel={handleCancelModal}
			>
				<Form
					form={form}
					labelCol={{ span: 4 }}
					wrapperCol={{ span: 20 }}
					style={{ maxWidth: 550 }}
					onFinish={handleCreateProduct}
				>
					<Form.Item
						label='Name'
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
							className='border border-black w-full px-2 py-1 rounded-md focus:outline-none'
						/>
					</Form.Item>

					<Form.Item
						label='Brand'
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
							className='border border-black w-full px-2 py-1 rounded-md focus:outline-none'
						/>
					</Form.Item>

					<Form.Item
						label='Price'
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
							className='border border-black w-full px-2 py-1 rounded-md focus:outline-none'
						/>
					</Form.Item>

					<Form.Item
						label='Image'
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
								onChange={handleOnChangeImage}
								maxCount={1}
							>
								<button className='flex items-center gap-2 border border-black p-2 rounded-md'>
									<Icon
										icon='material-symbols:upload'
										height={20}
									/>
									Upload
								</button>
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

			<Modal
				title='Sửa sản phẩm'
				open={openUpdateModal}
				footer={null}
				className='max-w-[880px] min-w-[785px]'
				onCancel={handleCancelUpdateModal}
			>
				<Spin
					spinning={isUpdating}
					delay={500}
				>
					<Form
						form={form}
						onFinish={handleUpdateProduct}
						labelCol={{ span: 5 }}
						labelAlign='left'
						wrapperCol={{ span: 19 }}
					>
						<div className='flex items-center justify-center gap-3'>
							<div className='flex items-center justify-center mb-12'>
								{productDetail.image && (
									<img
										src={productDetail.image}
										alt='image-detail'
										style={{
											width: '200px',
											height: '200px',
											borderRadius: '8px',
											objectFit: 'contain'
										}}
									/>
								)}
							</div>
							<div className='flex-1 items-center justify-center '>
								<Form.Item
									label='Tên hàng'
									name='name'
								>
									<input
										value={productDetail.name}
										onChange={handleOnChangeDetails}
										name='name'
										className='border-b-2 border-b-[#ccc] w-full px-2 py-1 focus:outline-none focus:border-b-[#4bac4d]'
									/>
								</Form.Item>

								<Form.Item
									label='Loại thực đơn'
									name='brand'
								>
									<ConfigProvider
										theme={{
											token: {
												colorBorder: '#fff',
												colorPrimaryHover: '#fff',
												controlOutline: '#fff',
												padding: '0 0'
											}
										}}
									>
										<Select
											name='type'
											value={productDetail.brand}
											onChange={value =>
												setProductDetail({
													...productDetail,
													brand: value
												})
											}
											options={renderOptions(
												typeProduct.data
											)}
											className='border-b-2 border-b-[#ccc] w-full px-2 py-1 focus:outline-none focus:border-b-[#4bac4d]'
										/>
									</ConfigProvider>
									{/* <input
								value={product.brand}
								onChange={handleOnChange}
								name='brand'
								className='border-b-2 border-b-[#ccc] w-full px-2 py-1 focus:outline-none focus:border-b-[#4bac4d]'
							/> */}
								</Form.Item>

								<Form.Item
									label='Loại hàng'
									name='category'
								>
									<ConfigProvider
										theme={{
											token: {
												colorBorder: '#fff',
												colorPrimaryHover: '#fff',
												controlOutline: '#fff',
												padding: '0 0'
											}
										}}
									>
										<Select
											name='category'
											value={productDetail.category}
											onChange={value =>
												setProductDetail({
													...productDetail,
													category: value
												})
											}
											options={renderOptions(
												category.data
											)}
											className='border-b-2 border-b-[#ccc] w-full px-2 py-1 focus:outline-none focus:border-b-[#4bac4d]'
										/>
									</ConfigProvider>
									{/* <input
								value={product.brand}
								onChange={handleOnChange}
								name='brand'
								className='border-b-2 border-b-[#ccc] w-full px-2 py-1 focus:outline-none focus:border-b-[#4bac4d]'
							/> */}
								</Form.Item>

								<Form.Item
									label='Giá bán'
									name='price'
								>
									<input
										value={productDetail.price}
										onChange={handleOnChangeDetails}
										name='price'
										className='border-b-2 border-b-[#ccc] w-full px-2 py-1 focus:outline-none focus:border-b-[#4bac4d]'
									/>
								</Form.Item>

								<Form.Item
									label='Ảnh sản phẩm'
									name='image'
								>
									<div>
										<Upload
											listType='picture-card'
											onChange={handleOnChangeImageDetail}
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
										className='bg-green-800 p-2 font-semibold w-full rounded-md text-white'
										type='primary'
									>
										Cập nhật
									</button>
								</Form.Item>
							</div>
						</div>
					</Form>
				</Spin>
			</Modal>

			<Modal
				title='Xóa hàng hóa'
				open={openDeleteModal}
				onCancel={() => setOpenDeleteModal(false)}
				footer={null}
			>
				<div className='flex flex-col gap-2 '>
					<span>
						Sản phẩm sẽ bị xóa hoàn toàn trong hệ thống <br />
						Bạn có chắc chắn muốn xóa
					</span>
					<button className='flex  p-3 bg-red-700 text-white items-center text-center'>
						Xác nhận
					</button>
				</div>
			</Modal>
		</div>
	);
};

export default ProductAdmin;
