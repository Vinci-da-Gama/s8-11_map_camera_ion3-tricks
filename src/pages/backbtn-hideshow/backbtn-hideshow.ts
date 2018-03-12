import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar, ViewController } from 'ionic-angular';

@Component({
	selector: 'page-backbtn-hideshow',
	templateUrl: 'backbtn-hideshow.html',
})
export class BackbtnHideshowPage {

	@ViewChild(Navbar) navBar: Navbar;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private viewCtrl: ViewController
	) { }

	ionViewWillEnter() {
		// way1 -- Navbar
		// this.navBar.setBackButtonText('Back-Config');
		// this.navBar.hideBackButton = true;
		// way2 -- ViewController
		// this.viewCtrl.setBackButtonText('Back-Config');
		// this.viewCtrl.enableBack();
		this.viewCtrl.showBackButton(false);
	}

}
