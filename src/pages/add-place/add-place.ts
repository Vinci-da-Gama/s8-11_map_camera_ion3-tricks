import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import { LocationModel } from '../../contract/models/location-model';
import { SetPlaceModal } from '../../shared/modals/set-place/set-place';
import { ErrorhandlerProvider } from '../../shared/providers/errorhandler';

@Component({
	selector: 'page-add-place',
	templateUrl: 'add-place.html'
})
export class AddPlacePage {

	private location: LocationModel = {
		lat: 40.76,
		lng: -73.97
	};
	private locationIsSet: Boolean = false;
	private zoomVal: Number = 10;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private modalCtrl: ModalController,
		private loadCtrl: LoadingController,
		private geo: Geolocation,
		private errHandler: ErrorhandlerProvider
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddPlacePage');
	}

	onSubmit(f: NgForm) {
		const fVal = f.value;
		console.log('38 -- fVal: ', fVal);
	}

	onLocateHere() {
		const spinner = this.loadCtrl.create({
			content: 'Get Location...'
		});
		spinner.present();
		this.geo.getCurrentPosition()
			.then((res) => {
				const rCoords = res.coords;
				this.location = new LocationModel(rCoords.latitude, rCoords.longitude);
				this.locationIsSet = true;
				spinner.dismiss();
			})
			.catch((err) => {
				this.errHandler.handleException(err, 'Get Current Location', spinner);
			});
	}

	openMapChoosePlace() {
		const locationObj = {
			location: this.location,
			isSet: this.locationIsSet
		}
		const spModal = this.modalCtrl.create(SetPlaceModal, locationObj);
		spModal.present();
		spModal.onDidDismiss((passBackLocation) => {
			if (passBackLocation) {
				this.location = passBackLocation.location;
				this.locationIsSet = true;
			} else {
				return;
			}
		});
	}

	onTakePhoto() {
		console.log('41 -- on take photo.');
	}

}
