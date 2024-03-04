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
				title={'con cặc'}
				sectionCardItems={sectionCardItems}
			/>
		</>
	);
};

export default HomePage;
