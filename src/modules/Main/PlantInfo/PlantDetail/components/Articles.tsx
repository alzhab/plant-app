import React, {ReactElement, useContext} from 'react';
import {scaleSize, WINDOW_WIDTH} from '@styles/mixins';
import {ButtonTypes, Navigations} from '@types';
import {ArticleCard, Button, Flex, Section} from '@components';
import {Colors, AppContext} from '@styles/base';
import {useNavigation} from '@react-navigation/native';
import {TABBAR_HEIGHT} from '@styles/spacing';

const Articles = (props: {light?: boolean}): ReactElement => {
	const navigation = useNavigation();
	const {colors} = useContext(AppContext);
	
	return (
	  <Flex
			container
			full
			styles={{
				paddingTop: scaleSize(16),
				paddingBottom: scaleSize(24),
				backgroundColor: props.light ? colors.SECOND_BG : null
			}}>
			<Section
				title={'Recommended Article'}
			>
				<Flex full>
					<ArticleCard
						mini
						bottom={24}
						width={WINDOW_WIDTH * 0.75}
					/>
     
					<ArticleCard
						mini
						bottom={24}
						width={WINDOW_WIDTH * 0.75}
					/>
     
					<Button
						title={'See More'}
						full
						empty
						color={Colors.PRIMARY}
						type={ButtonTypes.EMPTY}
						click={() => navigation.navigate(Navigations.Article)}
					/>
				</Flex>
			</Section>
		</Flex>
	);
};

export default Articles;
