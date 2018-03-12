import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';

import { PlacePage } from '../place/place';
import { BackbtnConfigPage } from '../backbtn-config/backbtn-config';

@Component({
	selector: 'page-nativeplugings-tabs',
	templateUrl: 'nativeplugings-tabs.html',
})
export class NativeplugingsTabsPage {

	private defTab: Number = 0;
	// @ViewChild('awesomeplace') nativeTabsNav: Tabs;
	private placePage: any = PlacePage;
	private bbcPage: any = BackbtnConfigPage;

	constructor(
		private navCtrl: NavController, private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad NativeplugingsTabsPage');
		// this will cause double root problem --> so use selectedIndex.
		// this.nativeTabsNav.select(0);
	}

}
