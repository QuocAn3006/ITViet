/* eslint-disable react/prop-types */
import { useState } from 'react';

const StatisticOwner = ({ allStore }) => {
	const [storeType, setStoreType] = useState('');

	return (
		<div className='p-4 flex gap-3 '>
			<select
				name='storeType'
				id=''
				className='mx-3 focus:outline-none cursor-pointer'
				value={storeType}
				onChange={e => setStoreType(e.target.value)}
			>
				{allStore.map((item, idx) => (
					<>
						<option
							value={item.name}
							key={idx}
							className='px-3'
						>
							{item.name}
						</option>
					</>
				))}
			</select>
		</div>
	);
};

export default StatisticOwner;
