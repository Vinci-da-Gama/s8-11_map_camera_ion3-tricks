import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';

import { WhatPlatformPage } from '../what-platform/what-platform';
import { ScreenOrientationPage } from '../screen-orientation/screen-orientation';

@Component({
	selector: 'page-tricks-tabs',
	templateUrl: 'tricks-tabs.html',
})
export class TricksTabsPage {

	private defTab: Number = 0;
	// @ViewChild('ion3tricktabs') trickTabsNav: Tabs;
	private wpPage: any = WhatPlatformPage;
	private soPage: any = ScreenOrientationPage;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ionViewDidLoad() {
		// this will cause double root problem --> so use selectedIndex.
		// this.trickTabsNav.select(0);
	}

}
