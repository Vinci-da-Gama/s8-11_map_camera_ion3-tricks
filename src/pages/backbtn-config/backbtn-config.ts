import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BackbtnHideshowPage } from '../backbtn-hideshow/backbtn-hideshow';

@Component({
	selector: 'page-backbtn-config',
	templateUrl: 'backbtn-config.html',
})
export class BackbtnConfigPage {

	private threeWaysResetBackBtn: String = '';
	private bbhsPage: any = BackbtnHideshowPage;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) {
		this.threeWaysResetBackBtn = 'way2';
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad BackbtnConfigPage');
	}

}
