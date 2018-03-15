import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';

import { LocationModel } from '../../contract/models/location-model';
import { SetPlaceModal } from '../../shared/modals/set-place/set-place';
import { ErrorhandlerProvider } from '../../shared/providers/errorhandler';

import { PlacePage } from '../place/place';
import { PlaceService } from '../../services/place-service';

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
	private imgUrl = '';

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private modalCtrl: ModalController,
		private loadCtrl: LoadingController,
		private geo: Geolocation,
		private camera: Camera,
		private errHandler: ErrorhandlerProvider,
		private pService: PlaceService
	) { }

	ionViewDidLoad() {
		console.log('ionViewDidLoad AddPlacePage');
	}

	onSubmit(f: NgForm) {
		const fVal = f.value;
		console.log('44 -- fVal: ', fVal);
		const spinner = this.loadCtrl.create({
			content: 'submit form'
		});
		spinner.present();
		this.pService.addNewPlace(fVal.placeTItle, fVal.placeDescription, this.imgUrl, this.location)
			.subscribe((res) => {
				if (res) {
					console.log('53 -- ', res);
					f.reset();
					this.location = {
						lat: 40.76,
						lng: -73.97
					};
					this.imgUrl = '';
					this.locationIsSet = false;
					spinner.dismiss();
					this.navCtrl.push(PlacePage);
				} else {
					const err = {
						message: 'fail to add new place.'
					};
					this.errHandler.handleException(err, 'add new place', spinner);
				}
			});
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
		const spinner = this.loadCtrl.create({
			content: 'Photo...'
		});
		spinner.present();
		const cameraObj = {
			quality: 70,
			destinationType: this.camera.DestinationType.DATA_URL,
			encodingType: this.camera.EncodingType.PNG,
			mediaType: this.camera.MediaType.PICTURE,
			correctOrientation: true
		};
		this.camera.getPicture(cameraObj)
			.then((imgData) => {
				console.log('91 -- ', imgData);
				this.imgUrl = imgData ? imgData : 'fakeImgPath';
				spinner.dismiss();
			})
			.catch((err) => {
				this.errHandler.handleException(err, 'taking photo', spinner);
			});
	}

}
