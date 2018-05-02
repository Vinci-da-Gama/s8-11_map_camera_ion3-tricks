import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { NativeplugingsTabsPage } from '../nativeplugings-tabs/nativeplugings-tabs';

@Component({
	selector: 'page-nativeplugings-tabs-container',
	templateUrl: 'nativeplugings-tabs-container.html',
})
export class NativeTabsContainer {

	private npTabs: any = NativeplugingsTabsPage;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad NativeplugingsTabsContainerPage');
	}

}
