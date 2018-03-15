import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, LoadingController } from 'ionic-angular';

import { AddPlacePage } from '../add-place/add-place';
import { PlaceDisplayModal } from '../../shared/modals/place-display/place-display';
import { PlaceModel } from '../../contract/models/place-model';
import { PlaceService } from '../../services/place-service';

@Component({
	selector: 'page-place',
	templateUrl: 'place.html'
})
export class PlacePage implements OnInit {

	private apPage: any = AddPlacePage;
	private places: PlaceModel[] = [];

	constructor(
		// private navCtrl: NavController,
		private modalCtrl: ModalController,
		private navParams: NavParams,
		private loadCtrl: LoadingController,
		private pService: PlaceService
	) { }

	ngOnInit() {
		this.pService.fetchStoragePlaces();
	}

	ionViewWillEnter() {
		const spinner = this.loadCtrl.create({
			content: 'load_places...'
		});
		spinner.present();

		this.places = this.pService.replyPlaces();
		if (this.places.length > 0) {
			spinner.dismiss();
		} else {
			this.pService.loadPlaces()
				.subscribe((res) => {
					if (res) {
						for (const key in res) {
							if (res.hasOwnProperty(key)) {
								const elem = res[key];
								this.places.push(elem);
							}
						}
					} else {
						return;
					}
					spinner.dismiss();
				});
		}

	}

	onOpenPage(place: PlaceModel, idx: number) {
		if (!place.hasOwnProperty('imgUrl')) {
			place.imgUrl = 'fake-img-url'
		}

		const displayPlaceModal = this.modalCtrl.create(PlaceDisplayModal, {
			targetPlace: place,
			index: idx
		});
		displayPlaceModal.present();
		/* displayPlaceModal.onDidDismiss(() => {

		}); */
	}

}
