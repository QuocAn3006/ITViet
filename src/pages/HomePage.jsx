import Section from '../components/Section';
import { sectionCardItems } from '../constants';

const HomePage = () => {
	return (
		<>
			<Section
				title={'Giúp bạn quản lý dễ dàng, bán hàng hiệu quả'}
				sectionCardItems={sectionCardItems}
			/>

			<Section
				title={'Huy ăn cức'}
				sectionCardItems={sectionCardItems}
			/>
		</>
	);
};

export default HomePage;
