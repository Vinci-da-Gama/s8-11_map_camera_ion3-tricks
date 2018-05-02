import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ScrollListPage } from '../scroll-list/scroll-list';

@Component({
	selector: 'page-scorll-container',
	templateUrl: 'scorll-container.html',
})
export class ScorllContainerPage {

	private slpage: any = ScrollListPage;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad ScorllContainerPage');
	}

}
