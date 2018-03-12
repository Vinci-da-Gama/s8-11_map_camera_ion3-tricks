import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
	selector: 'page-welcome-intro',
	templateUrl: 'welcome-intro.html'
})
export class WelcomeIntroPage {

	constructor(
		public navCtrl: NavController
	) { }

}
