import { Icon } from '@iconify/react';

const ProductAdmin = () => {
	return (
		<div className='flex flex-col'>
			<div className='flex gap-4'>
				<div className='flex-1 relative'>
					<input
						type='text'
						className='w-full p-2 border border-black rounded-lg'
					/>
					<div className='absolute right-3 top-2 text-primary font-bold'>
						<Icon
							icon='ph:magnifying-glass-light'
							height={22}
						/>
					</div>
				</div>
				<button
					type='button'
					className='bg-primary py-2 px-4 rounded-md text-white font-semibold'
				>
					Thêm mới sản phẩm
				</button>
			</div>
			<div className='grid grid-cols-4 mt-5 gap-4'>
				<div className='p-5 bg-white rounded-md flex flex-col'>
					<div className='border border-[#ccc] flex items-center justify-center overflow-hidden'>
						<img
							src='../src/assets/images/logo.png'
							alt='image'
							className='object-cover'
							width={152}
							height={110}
						/>
					</div>
					<h3 className='mt-2'>Sản phảm 1</h3>
					<ul>
						<li>12</li>
						<li>12</li>
						<li>12</li>
						<li>12</li>
					</ul>
					<div className='mt-2 w-full flex justify-between gap-2'>
						<button
							type='button'
							className='p-4 border-primary text-primary font-semibold border w-full rounded-lg flex items-center justify-center gap-2'
						>
							<Icon icon='bi:pen' />
							Edit
						</button>
						<button
							type='button'
							className='p-4 border-red-500 text-red-500 border w-full rounded-lg flex items-center justify-center gap-2'
						>
							<Icon icon='ph:trash-light' />
							delete
						</button>
					</div>
				</div>

				<div className='p-5 bg-white rounded-md flex flex-col'>
					<div className='border border-[#ccc] flex items-center justify-center overflow-hidden'>
						<img
							src='../src/assets/images/logo.png'
							alt='image'
							className='object-cover'
							width={152}
							height={110}
						/>
					</div>
					<h3 className='mt-2'>Sản phảm 1</h3>
					<ul>
						<li>12</li>
						<li>12</li>
						<li>12</li>
						<li>12</li>
					</ul>
					<div className='mt-2 w-full flex justify-between gap-2'>
						<button
							type='button'
							className='p-4 border-primary text-primary font-semibold border w-full rounded-lg flex items-center justify-center gap-2'
						>
							<Icon icon='bi:pen' />
							Edit
						</button>
						<button
							type='button'
							className='p-4 border-red-500 text-red-500 border w-full rounded-lg flex items-center justify-center gap-2'
						>
							<Icon icon='ph:trash-light' />
							delete
						</button>
					</div>
				</div>

				<div className='p-5 bg-white rounded-md flex flex-col'>
					<div className='border border-[#ccc] flex items-center justify-center overflow-hidden'>
						<img
							src='../src/assets/images/logo.png'
							alt='image'
							className='object-cover'
							width={152}
							height={110}
						/>
					</div>
					<h3 className='mt-2'>Sản phảm 1</h3>
					<ul>
						<li>12</li>
						<li>12</li>
						<li>12</li>
						<li>12</li>
					</ul>
					<div className='mt-2 w-full flex justify-between gap-2'>
						<button
							type='button'
							className='p-4 border-primary text-primary font-semibold border w-full rounded-lg flex items-center justify-center gap-2'
						>
							<Icon icon='bi:pen' />
							Edit
						</button>
						<button
							type='button'
							className='p-4 border-red-500 text-red-500 border w-full rounded-lg flex items-center justify-center gap-2'
						>
							<Icon icon='ph:trash-light' />
							delete
						</button>
					</div>
				</div>

				<div className='p-5 bg-white rounded-md flex flex-col'>
					<div className='border border-[#ccc] flex items-center justify-center overflow-hidden'>
						<img
							src='../src/assets/images/logo.png'
							alt='image'
							className='object-cover'
							width={152}
							height={110}
						/>
					</div>
					<h3 className='mt-2'>Sản phảm 1</h3>
					<ul>
						<li>12</li>
						<li>12</li>
						<li>12</li>
						<li>12</li>
					</ul>
					<div className='mt-2 w-full flex justify-between gap-2'>
						<button
							type='button'
							className='p-4 border-primary text-primary font-semibold border w-full rounded-lg flex items-center justify-center gap-2'
						>
							<Icon icon='bi:pen' />
							Edit
						</button>
						<button
							type='button'
							className='p-4 border-red-500 text-red-500 border w-full rounded-lg flex items-center justify-center gap-2'
						>
							<Icon icon='ph:trash-light' />
							delete
						</button>
					</div>
				</div>

				<div className='p-5 bg-white rounded-md flex flex-col'>
					<div className='border border-[#ccc] flex items-center justify-center overflow-hidden'>
						<img
							src='../src/assets/images/logo.png'
							alt='image'
							className='object-cover'
							width={152}
							height={110}
						/>
					</div>
					<h3 className='mt-2'>Sản phảm 1</h3>
					<ul>
						<li>12</li>
						<li>12</li>
						<li>12</li>
						<li>12</li>
					</ul>
					<div className='mt-2 w-full flex justify-between gap-2'>
						<button
							type='button'
							className='p-4 border-primary text-primary font-semibold border w-full rounded-lg flex items-center justify-center gap-2'
						>
							<Icon icon='bi:pen' />
							Edit
						</button>
						<button
							type='button'
							className='p-4 border-red-500 text-red-500 border w-full rounded-lg flex items-center justify-center gap-2'
						>
							<Icon icon='ph:trash-light' />
							delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductAdmin;
