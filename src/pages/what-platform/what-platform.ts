import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-what-platform',
	templateUrl: 'what-platform.html',
})
export class WhatPlatformPage {

	constructor(
		private navCtrl: NavController, private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad WhatPlatformPage');
	}

}
