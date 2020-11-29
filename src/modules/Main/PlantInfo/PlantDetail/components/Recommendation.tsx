import React, {ReactElement} from 'react';
import {Button, Flex, IconBox, PWH, Section} from '@components';
import {Colors, TextSize} from '@styles/base';
import {AI, ButtonTypes, JC, Navigations} from '@types';
import {scaleSize} from '@styles/mixins';
import {Bailer, Temp} from '@icons';
import {useNavigation} from '@react-navigation/native';

const Recommendation = (props: {container?: boolean, ver?: number}): ReactElement => {
	const navigation = useNavigation();
 
	return (
	  <Flex container={props.container} styles={{marginVertical: scaleSize(props.ver || 0)}}>
			<Section
				title={'Recommendation'}
				right={() => (
					<Button
						title={'Compare'}
						color={Colors.PRIMARY}
						type={ButtonTypes.EMPTY}
						click={() => navigation.navigate(Navigations.PlantEnvCompare)}
					/>
				)}
			>
				<Flex full dir={'row'} ai={AI.center} jc={JC.spaceBetween} styles={{marginBottom: scaleSize(32)}}>
					<Flex styles={{width: '55%'}} ai={AI.center} dir={'row'} jc={JC.spaceBetween}>
						<IconBox
							icon={{
								Icon: Bailer,
								back: Colors.BLUE,
								box: 32,
								scale: 1.4
							}}
							title={{
								text: '12hr',
							}}
							subTitle={{
								text: 'Watering every',
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
    
					<IconBox
						icon={{
							Icon: Temp,
							back: Colors.DARKBLUE,
							box: 32,
							scale: 1.4
						}}
						title={{
							text: '16°c',
							size: TextSize.extraLarge
						}}
						subTitle={{
							text: '',
						}}
					/>
				</Flex>
   
				<PWH pressure={'0'} humidity={'0'} wind={'0'} />
			</Section>
		</Flex>
	);
};

export default Recommendation;
