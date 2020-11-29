import React, {ReactElement, useContext} from 'react';
import {Flex, Text} from '../../atoms';
import {Button} from '../../molecules';
import {TextFamily, TextSize, AppContext} from '@styles/base';
import {getStyles} from './styles';
import {AI, ButtonTypes, JC} from '@types';
import {TextInput} from 'react-native';
import {scaleSize, WINDOW_WIDTH} from '@styles/mixins';
import {Props} from './interfaces';
import {useNavigation} from '@react-navigation/native';
import {CONTAINER_HOR_PADDING} from '@styles/spacing';
import SearchDropdown from '../SearchDropdown'
import {ArrowLeft, Close, Search} from '../../../assets/icons';

const Header = (props: Props): ReactElement => {
	const {colors} = useContext(AppContext);
	const styles = getStyles(colors);
	const navigation = useNavigation();
	const showDropdown = props.searchData ? props.searchData.showDropdown : false;
	let BackIcon = ArrowLeft;
	
	if(props.close) {
		BackIcon = Close
	}
	
	return (
		<Flex container full dir={'row'} ai={AI.center} jc={JC.spaceBetween} styles={[styles.header, {marginBottom: scaleSize(props.bottom || 0)}]}>
			{
			  (props.back || props.close || props.title) && !showDropdown ?
					<Flex dir={'row'} ai={AI.center}>
						{
							props.back || props.close
								? (
									<Button
										click={() => navigation.goBack()}
										type={ButtonTypes.EMPTY}
										styles={{paddingVertical: 0, marginLeft: -CONTAINER_HOR_PADDING}}
									>
										<BackIcon scale={1.6} color={colors.FONT} />
									</Button>
								)
								: null
						}
    
						{
							props.title
								? (
								  <Text
										family={TextFamily.BOLD}
										size={TextSize.large}
										styles={{marginLeft: props.back || props.close ? scaleSize(10) : 0}}
									>
										{props.title}
									</Text>
								)
								: null
						}
					</Flex> : null
			}
   
			{
				props.searchData ? (
				  <SearchDropdown
						width={showDropdown ? '100%' : props.searchData.width || '100%'}
						list={[
							'Apple',
							'Apple Washington',
							'Apple Australia'
						]}
						show={showDropdown}
						dropdownWidth={WINDOW_WIDTH - (2 * CONTAINER_HOR_PADDING)}
						choose={props.searchData.choose.bind(this)}
					>
						<Flex full dir={'row'} ai={AI.center} styles={[styles.search]}>
							<Search scale={1.6} />
       
							<TextInput value={props.searchData.value} onChangeText={props.searchData.onChange.bind(this)} style={styles.searchInput} />
						</Flex>
					</SearchDropdown>
				): null
			}
			
			{props.right && !showDropdown ? props.right() : null}
		</Flex>
	);
};

export default Header;
