import { Icon } from '@iconify/react';
import Section from '../components/Section';
import { sectionCardItems } from '../constants';

const HomePage = () => {
	return (
		<>
			<Banner
				title={'Phần mềm quản lý bán hàng phổ biến nhất'}
				isHomeBanner={true}
			/>
			<Section
				title={'Giúp bạn quản lý dễ dàng, bán hàng hiệu quả'}
				sectionCardItems={sectionCardItems}
			/>
		</>
	);
};

export default HomePage;
