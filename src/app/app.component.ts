import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import fb from 'firebase';

import { WelcomeIntroPage } from '../pages/welcome-intro/welcome-intro';
import { NativeTabsContainer } from '../pages/nativeplugings-tabs-container/nativeplugings-tabs-container';
import { TricksTabsContainerPage } from '../pages/tricks-tabs-container/tricks-tabs-container';
import { ScorllContainerPage } from '../pages/scroll-compo/scorll-container/scorll-container';

@Component({
	templateUrl: 'app.html'
})
export class NativeMapCameraIon3TricksApp {

	@ViewChild('mapcameratricks') SideMenuNav: NavController;
	private welcomePage: any = WelcomeIntroPage;
	private ntcPage: any = NativeTabsContainer;
	private ttcPage: any = TricksTabsContainerPage;
	private scrollPage: any = ScorllContainerPage;

	constructor(
		private platform: Platform,
		private menuCtrl: MenuController,
		private statusBar: StatusBar,
		private splashScreen: SplashScreen
	) {
		const fbConfig = {
			apiKey: 'AIzaSyB8dtwPpN6mejGPHsTJn4wd13AxnqlbDgA',
			authDomain: 'ion3-map-camera.firebaseapp.com',
			databaseURL: 'https://ion3-map-camera.firebaseio.com',
			projectId: 'ion3-map-camera',
			storageBucket: 'ion3-map-camera.appspot.com',
			messagingSenderId: '438809095893'
		};
		fb.initializeApp(fbConfig);
		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			statusBar.styleDefault();
			splashScreen.hide();
		});
	}

	onLoadPage(page: any) {
		this.SideMenuNav.setRoot(page);
		this.menuCtrl.close();
	}

}

