import React, {Component, ReactElement} from 'react';
import {Flex} from '@components';
import {Header, ListItem} from './components';
import {NavigationProps, Navigations} from '@types';
import {Bell, Logout, Settings} from '@icons';
import {Colors} from '@styles/base';
import {observer} from 'mobx-react';
import {authStore} from '@stores';

@observer
class Profile extends Component<NavigationProps> {
	logout() {
		authStore.logout();
		this.props.navigation.navigate(Navigations.Auth)
	}
 
	render(): ReactElement {
		return (
			<Flex full size={1}>
				<Header/>
				
				<Flex container full>
					<ListItem back={Colors.YELLOW} Icon={Bell} route={Navigations.Home} title={'Notification'} />
					<ListItem back={Colors.PURPLE} Icon={Settings} route={Navigations.Home} title={'Settings'} />
					<ListItem back={Colors.NOTIFICATION} Icon={Logout} click={this.logout.bind(this)} title={'Log Out'} />
				</Flex>
			</Flex>
		);
	}
}

export default Profile;
