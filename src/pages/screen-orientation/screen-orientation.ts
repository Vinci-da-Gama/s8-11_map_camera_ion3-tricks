import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';

@Component({
	selector: 'page-screen-orientation',
	templateUrl: 'screen-orientation.html',
})
export class ScreenOrientationPage {

	private width: Number;
	private height: Number;
	private isLand: Boolean;
	private isPortrait: Boolean;
	private isRTL: Boolean;
	// private version: String;
	private currUrl: String;
	private currDir: String;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private plt: Platform
	) {
		this.width = this.plt.width();
		this.height = this.plt.height();
		this.isLand = this.plt.isLandscape();
		this.isPortrait = this.plt.isPortrait();
		this.isRTL = this.plt.isRTL;
		console.log('29 -- platform version: ', this.plt.version());
		this.currUrl = this.plt.url();
		this.currDir = this.plt.dir();
	}

	ionViewDidLoad() {
	}

}
