import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { AddPlacePage } from '../add-place/add-place';

@Component({
	selector: 'page-place',
	templateUrl: 'place.html',
})
export class PlacePage {

	private apPage: any = AddPlacePage;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad PlacePage');
	}

}
