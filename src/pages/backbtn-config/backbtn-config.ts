import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-backbtn-config',
	templateUrl: 'backbtn-config.html',
})
export class BackbtnConfigPage {

	constructor(
		private navCtrl: NavController, private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad BackbtnConfigPage');
	}

}
