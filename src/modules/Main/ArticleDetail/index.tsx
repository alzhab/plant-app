import React, {Component, ReactElement} from 'react';
import {Flex, Header, Section} from '@components';
import {ScrollView} from 'react-native';
import {scaleSize} from '@styles/mixins';
import {Author, CommentContainer, CommentsForm, Detail} from './components';

class ArticleDetail extends Component {
	render(): ReactElement {
		return (
			<>
				<Header back title={'Community'} />
				
				<Flex full container size={1} styles={{marginTop: scaleSize(16)}}>
					<ScrollView
						showsVerticalScrollIndicator={false}
						style={{width: '100%', marginBottom: 100}}
					>
					  <Author/>
					  
					  <Detail/>
       
						<Section title={'Comment'}>
							<CommentContainer/>
							<CommentContainer/>
						</Section>
					</ScrollView>
     
					<CommentsForm/>
				</Flex>
			</>
		);
	}
}

export default ArticleDetail;
