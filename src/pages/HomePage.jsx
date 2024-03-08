import { Icon } from '@iconify/react';
import Section from '../components/Section';
import { sectionCardItems } from '../constants';
import Footer from '../components/Footer';

const HomePage = () => {
	return (
		<>
			<Section
				title={'Giúp bạn quản lý dễ dàng, bán hàng hiệu quả'}
				sectionCardItems={sectionCardItems}
			/>

			<Section
				title={'Phi ăn cức'}
				sectionCardItems={sectionCardItems}
			/>
		</>
	);
};

export default HomePage;
