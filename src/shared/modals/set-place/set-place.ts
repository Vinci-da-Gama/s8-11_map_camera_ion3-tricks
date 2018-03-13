import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

import { LocationModel } from '../../../contract/models/location-model';
import { MarkerInterface } from '../../../contract/interfaces/marker-interface';
import { GoogleMap } from '@agm/core/services/google-maps-types';

@Component({
	selector: 'modal-set-place',
	templateUrl: 'set-place.html'
})
export class SetPlaceModal {

	private passinLocation: LocationModel;
	private newMarker: LocationModel;
	private zoomVal: Number = 10;
	private isDisableDefUi: Boolean = true;
	private isZoomControl: Boolean = false;

	private multipleMarkers: MarkerInterface[] = [
		{
			lat: 40.673858,
			lng: -73.815982,
			label: 'A',
			draggable: true
		},
		{
			lat: 40.672828,
			lng: -74.0,
			label: 'B',
			draggable: false
		},
		{
			lat: 40.723858,
			lng: -73.895982,
			label: 'C',
			draggable: true
		}
	];

	/* private lat: Number = 51.678418;
	private lng: Number = 7.809007; */

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams,
		private viewCtrl: ViewController
	) {
		this.passinLocation = this.navParams.get('location');
		console.log('28 -- location: ', this.navParams.get('location'));
		if (this.navParams.get('isSet')) {
			this.newMarker = this.passinLocation;
		}
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad SetPlacePage');
	}

	onSetMarker(e: any) {
		const eCoords: LocationModel = e.coords;
		this.newMarker = new LocationModel(eCoords.lat, eCoords.lng);
	}

	clickedMarker(label: string, index: number) {
		console.log(`clicked the marker: ${label || index}`)
	}

	markerDragEnd(m: MarkerInterface, $event: MouseEvent) {
		console.log('dragEnd', m, $event);
	}

	onConfirm() {
		this.viewCtrl.dismiss({
			location: this.newMarker
		});
	}

	onAbort() {
		this.viewCtrl.dismiss();
	}
}
