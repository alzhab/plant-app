import React, {ReactElement, useContext} from 'react';
import {Props} from './interfaces';
import {Flex, Text} from '@components';
import {scaleSize} from '@styles/mixins';
import {Colors, TextFamily, TextSize, AppContext} from '@styles/base';
import {AI, JC} from '@types';

const IconBox = (props: Props): ReactElement => {
	const {colors} = useContext(AppContext);
	const {
	  Icon,
		back: iconBack = Colors.PRIMARY,
		color: iconColor = colors.SECOND_BG,
		scale: iconScale = scaleSize(1),
		box = scaleSize(32)
	} = props.icon;
	
	const {
		text: titleText = '',
		size: titleSize = TextSize.medium,
		family: titleFamily = TextFamily.BOLD,
		color: titleColor = Colors.FONT,
	} = props.title;
 
	const {
		text: subTitleText = '',
		size: subTitleSize = TextSize.small,
		family: subTitleFamily = TextFamily.REGULAR,
		color: subTitleColor = Colors.FONT_SECOND,
	} = props.subTitle;
 
	return (
		<Flex dir={'row'} ai={AI.center}>
			{
				Icon
					? (
						<Flex
							styles={[{
								borderRadius: box / 5,
								backgroundColor: colors[iconBack],
								width: box,
								height: box
							}]}
							ai={AI.center}
							jc={JC.center}>
							<Icon scale={iconScale} color={iconColor} />
						</Flex>
					) : null
			}
   
			<Flex dir={props.reverse ? 'column-reverse' : 'column'} styles={{marginLeft: props.right ? scaleSize(props.right) : 8}} jc={JC.spaceAround}>
				{
					subTitleText.length
						? (
							<Text
								size={subTitleSize}
								family={subTitleFamily}
								color={subTitleColor}
							>{subTitleText}</Text>
						) : null
				}
    
				<Text
					size={titleSize}
					family={titleFamily}
					color={titleColor}
				>{titleText}</Text>
			</Flex>
		</Flex>
	);
};

export default IconBox;
