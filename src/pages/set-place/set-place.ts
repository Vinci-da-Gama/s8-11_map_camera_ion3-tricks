import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
	selector: 'page-set-place',
	templateUrl: 'set-place.html',
})
export class SetPlacePage {

	constructor(
		private navCtrl: NavController, private navParams: NavParams
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad SetPlacePage');
	}

}
