import React, {ReactElement} from 'react';
import {scaleSize, WINDOW_WIDTH} from '@styles/mixins';
import {ButtonTypes, Navigations} from '@types';
import {ArticleCard, Button, Flex, Section} from '@components';
import {Colors} from '@styles/base';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TABBAR_HEIGHT} from '@styles/spacing';

const Articles = (): ReactElement => {
	const navigation = useNavigation();
 
	return (
		<Section
			bottom={TABBAR_HEIGHT}
			title={'Article for you'}
			right={() => (
				<Button
					title={'Show More'}
					color={Colors.PRIMARY}
					type={ButtonTypes.EMPTY}
					click={() => navigation.navigate(Navigations.Article)}
				/>
			)}
		>
			<Flex full>
				<FlatList
					style={{width: '100%'}}
					horizontal
					ItemSeparatorComponent={() => <Flex styles={{width: scaleSize(16)}} />}
					showsHorizontalScrollIndicator={false}
					keyExtractor={(_, index) => index.toString()}
					data={Array(5).fill('')}
					renderItem={() => (
						<ArticleCard
							width={WINDOW_WIDTH * 0.75}
						/>
					)} />
			</Flex>
		</Section>
	);
};

export default Articles;
