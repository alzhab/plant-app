import React, {ReactElement} from 'react';
import {Button, Delay, Flex, IconBox, Section, Text} from '@components';
import {Colors, TextFamily} from '@styles/base';
import {AI, ButtonTypes, JC, Navigations} from '@types';
import {scaleSize} from '@styles/mixins';
import {Apple, Bailer, Rain} from '@icons';
import {useNavigation} from '@react-navigation/native';

const Shedule = (): ReactElement => {
	const navigation = useNavigation();
 
	return (
		<>
			<Section
				title={'Daily Schedule'}
				bottom={24}
				right={() => (
					<Button
						title={'Edit'}
						color={Colors.PRIMARY}
						type={ButtonTypes.EMPTY}
						click={() => navigation.navigate(Navigations.PlantEnvCompare)}
					/>
				)}
			>
				<Flex full dir={'row'} ai={AI.center} jc={JC.spaceBetween} styles={{marginBottom: scaleSize(24)}}>
					<Flex styles={{width: '60%'}} ai={AI.center} dir={'row'} jc={JC.spaceBetween}>
						<IconBox
							icon={{
								Icon: Bailer,
								back: Colors.BLUE,
								box: 32,
								scale: 1.4
							}}
							title={{
								text: '12hr 12mins',
							}}
							subTitle={{
								text: 'Watering in',
							}}
						/>
      
						<Flex styles={{
							width: 1,
							height: scaleSize(32),
							backgroundColor: '#E0F2D8'
						}} />
      
						<IconBox
							icon={{}}
							title={{
								text: '200ml',
							}}
							subTitle={{
								text: 'Water',
							}}
						/>
					</Flex>
				</Flex>
    
				<IconBox
					icon={{
						Icon: Apple,
						box: 32,
						scale: 1.4
					}}
					title={{
						text: '33 days 14hr',
					}}
					subTitle={{
						text: 'Harvesting in',
					}}
				/>
			</Section>
   
			<Flex full>
				<Flex full dir={'row'} ai={AI.center} jc={JC.spaceBetween} styles={{marginBottom: 10}}>
					<Flex styles={{width: '30%'}}>
						<Text color={Colors.FONT_SECOND} family={TextFamily.SEMIBOLD}>Delayed</Text>
					</Flex>
					<Flex styles={{width: '65%'}}>
						<Text color={Colors.FONT_SECOND} family={TextFamily.SEMIBOLD}>When</Text>
					</Flex>
				</Flex>
    
				<Delay
					time={'23hr 23min'}
					bottom={8}
					textBack={Colors.MAIN_BG}
					back={Colors.BLUE}
					icon={{
						Icon: Rain,
						scale: 1.6
					}}
					title={{
						text: 'Heavy Rain',
						color: Colors.SECOND_BG,
					}}
				/>
    
				<Delay
					time={'3 day'}
					textBack={Colors.MAIN_BG}
					back={Colors.DARKBLUE}
					icon={{
						Icon: Rain,
						scale: 1.6
					}}
					title={{
						text: 'Storm',
						color: Colors.SECOND_BG,
					}}
				/>
			</Flex>
		</>
	);
};

export default Shedule;
