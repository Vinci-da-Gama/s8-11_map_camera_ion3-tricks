import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-screen-orientation',
	templateUrl: 'screen-orientation.html',
})
export class ScreenOrientationPage {

	constructor(
		private navCtrl: NavController, private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad ScreenOrientationPage');
	}

}
