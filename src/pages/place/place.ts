import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-place',
	templateUrl: 'place.html',
})
export class PlacePage {

	constructor(
		private navCtrl: NavController, private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad PlacePage');
	}

}
