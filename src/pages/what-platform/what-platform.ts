import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

import { ImgObjInterface } from '../../contract/interfaces/imgobj-interface';

@Component({
	selector: 'page-what-platform',
	templateUrl: 'what-platform.html',
})
export class WhatPlatformPage {

	private imgArr: Array<ImgObjInterface> = [
		{
			imgUrl: '../../assets/imgs/c++.png',
			title: 'c++ img',
			desc: 'c++ description',

		},
		{
			imgUrl: '../../assets/imgs/dig.png',
			title: 'dig img',
			desc: 'dig description',

		}
	]

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
