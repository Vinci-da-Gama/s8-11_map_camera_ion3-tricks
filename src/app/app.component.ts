import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { WelcomeIntroPage } from '../pages/welcome-intro/welcome-intro';
import { NativeTabsContainer } from '../pages/nativeplugings-tabs-container/nativeplugings-tabs-container';
import { TricksTabsContainerPage } from '../pages/tricks-tabs-container/tricks-tabs-container';

@Component({
	templateUrl: 'app.html'
})
export class NativeMapCameraIon3TricksApp {

	@ViewChild('mapcameratricks') SideMenuNav: NavController;
	private welcomePage: any = WelcomeIntroPage;
	private ntcPage: any = NativeTabsContainer;
	private ttcPage: any = TricksTabsContainerPage;

	constructor(
		private platform: Platform,
		private menuCtrl: MenuController,
		private statusBar: StatusBar,
		private splashScreen: SplashScreen
	) {
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

