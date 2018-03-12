import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

@Component({
	selector: 'page-what-platform',
	templateUrl: 'what-platform.html',
})
export class WhatPlatformPage {

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private pltf: Platform
	) {
		console.log('15 -- the platform is: ', this.pltf.platforms());
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad WhatPlatformPage');
	}

}
