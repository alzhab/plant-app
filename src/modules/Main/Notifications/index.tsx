import React, {Component} from 'react';
import {Flex, Header, NotButton} from '@components';
import {Filter, Search} from '@icons';
import {JC} from '@types';
import {Card} from './components';
import {CardType} from './interfaces';
import {scaleSize} from '@styles/mixins';
import {ScrollView} from 'react-native';

class Notificatioins extends Component {
	render() {
		return (
			<>
				<Header close title={'Notification'}
					right={() => (
					  <Flex styles={{width: '20%'}} dir={'row'} jc={JC.spaceBetween}>
							<NotButton click={() => {}} Icon={Search} />
							<NotButton click={() => {}} Icon={Filter} />
						</Flex>
					)} />
				<Flex size={1} container full styles={{marginTop: scaleSize(24)}}>
					<ScrollView style={{width: '100%'}}>
						<Card
							type={CardType.article}
							time={'1 hr ago'}
							text={[
								{
									text: 'John doe',
									bold: true
								},
								{
									text: 'your comment on'
								},
								{
									text: 'How to produce best fertilizer for tomatoes',
									bold: true,
								}
							]}/>
						<Card
							type={CardType.follow}
							time={'1 hr ago'}
							text={[
								{
									text: 'Samantha',
									bold: true
								},
								{
									text: 'follow you'
								}
							]}/>
						<Card
							type={CardType.plants}
							time={'1 hr ago'}
							text={[
								{
									text: 'Apple, Blueberry, Carrot, Mango & Almond ',
									bold: true
								},
								{
									text: 'need to watering now!'
								}
							]}/>
					</ScrollView>
				</Flex>
			</>
		);
	}
}

export default Notificatioins;
