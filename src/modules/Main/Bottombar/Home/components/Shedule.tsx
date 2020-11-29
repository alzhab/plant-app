import React, {ReactElement, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Button, Flex, Section, Text, PlantCard} from '@components';
import {Colors, TextFamily, TextSize, AppContext} from '@styles/base';
import {AI, ButtonTypes, JC, Navigations, TextAlign} from '@types';
import {getStyles} from '../styles';
import PotIcon from '@assets/images/pot_icon.svg';
import {scaleSize, WINDOW_WIDTH} from '@styles/mixins';
import {FlatList} from 'react-native';

const Shedule = (): ReactElement => {
	const navigation = useNavigation();
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
	
	return (
		<Section
			title={'Schedule'}
			bottom={32}
			right={() => (
				<Button
					title={'Add Plant'}
					color={Colors.PRIMARY}
					type={ButtonTypes.EMPTY}
					click={() => navigation.navigate(Navigations.Article)}
				/>
			)}
		>
			{
			  false && (
			    <Flex styles={styles.noShedule} full ai={AI.center} jc={JC.center}>
						<PotIcon />
				
						<Text
							styles={{marginTop: 7, marginHorizontal: scaleSize(35)}}
							textAlign={TextAlign.center}
							family={TextFamily.BOLD}
							size={TextSize.large}>
              You {"don't"} have any plants yet
              Add your plant now
						</Text>
					</Flex>
				)
			}
   
			<Flex full>
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					ItemSeparatorComponent={() => <Flex styles={{width: scaleSize(16)}} />}
					keyExtractor={(_, index) => index.toString()}
					data={Array(5).fill('')}
					renderItem={() => <PlantCard width={WINDOW_WIDTH * 0.35} />}
				/>
			</Flex>
		</Section>
	);
};

export default Shedule;
