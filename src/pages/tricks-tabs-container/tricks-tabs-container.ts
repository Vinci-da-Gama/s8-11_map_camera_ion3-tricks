import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TricksTabsPage } from '../tricks-tabs/tricks-tabs';

@Component({
	selector: 'page-tricks-tabs-container',
	templateUrl: 'tricks-tabs-container.html',
})
export class TricksTabsContainerPage {

	private tricksTabs: any = TricksTabsPage;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad TricksTabsContainerPage');
	}

}
