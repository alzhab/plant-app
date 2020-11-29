import React, {ReactElement, useContext} from 'react';
import {Button, Flex} from '@components';
import {ButtonTypes} from '@types';
import {useNavigation} from '@react-navigation/native';
import {AppContext} from '@styles/base';

const NotButton = (props: {active?: boolean, Icon: any, click: () => void}): ReactElement => {
	const navigation = useNavigation();
	const {colors} = useContext(AppContext);
	const Icon = props.Icon;
	
	return (
		<Button empty click={() => props.click()} type={ButtonTypes.EMPTY} styles={{position: 'relative'}}>
			{
				props.active
					? <Flex styles={{
						position: 'absolute',
						top: 0,
						right: 0,
						width: 10,
						height: 10,
						borderWidth: 1,
						borderRadius: 10,
						backgroundColor: colors.NOTIFICATION,
						borderColor: colors.SECOND_BG,
						zIndex: 2,
						transform: [{translateY: -3}, {translateX: 3}]
					}}/>
					: null
			}
			
			<Icon scale={2} />
		</Button>
	);
};

export default NotButton;
