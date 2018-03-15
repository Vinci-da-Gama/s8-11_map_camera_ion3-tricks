import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
// import { File } from '@ionic-native/file';

import { PlaceModel } from '../../../contract/models/place-model';
import { PlaceService } from '../../../services/place-service';


@Component({
	selector: 'place-display-modal',
	templateUrl: 'place-display.html',
})
export class PlaceDisplayModal {

	private sigPlace: PlaceModel;
	private currIdx = 0;

	constructor(
		private navParams: NavParams,
		// private file: File,
		private viewCtrl: ViewController,
		private pService: PlaceService
	) {
		this.sigPlace = this.navParams.get('targetPlace');
		this.currIdx = this.navParams.get('index');
	}

	private onLeaveRecordPlace() {
		// cordova.file.dataDirectory --> this is for data storage, but I donot have real Device.
		// this.file.createFile(cordova.file.dataDirectory, 'uCheckThesePlace.txt', true);
		// File has its own crud, check https://ionicframework.com/docs/native/file/
		this.viewCtrl.dismiss();
	}

	onDelete() {
		this.pService.deletePlace(this.currIdx);
		/* .subscribe((res) => {
			console.log('32 -- ', res);
		}); */
		this.onLeaveRecordPlace();
	}

}
