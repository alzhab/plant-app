import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCMHhs1THdBHW-MRNJYQzm1FsgYmZC0rpU',
	authDomain: 'plantcontrol-36e5b.firebaseapp.com',
	databaseURL: 'https://plantcontrol-36e5b.firebaseio.com',
	projectId: 'plantcontrol-36e5b',
	storageBucket: 'your-project-id-1234.appspot.com',
	messagingSenderId: `AAAAOqNHZWI:APA91bFTVxNUJoPUW7YaD0PqlCKseMIiHHCJCawtJiW5iUWFWbK91qoWOWaMhmayOQMVZ2dg6uewsi_XyjS0gfJJ3VYjZv4Tq49uBcQemLusHDrV_Soz9TGnsnZn_twJjpFrr6MKVcyx`,
	appId: '1:251847468386:ios:6d97dade5172b76785f83b',
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export { firebase }
