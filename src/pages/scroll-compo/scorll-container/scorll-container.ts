import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ScrollTabsPage } from '../scroll-tabs/scroll-tabs';

@Component({
	selector: 'page-scorll-container',
	templateUrl: 'scorll-container.html',
})
export class ScorllContainerPage {

	private sTabsPage: any = ScrollTabsPage;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad ScorllContainerPage');
	}

}
