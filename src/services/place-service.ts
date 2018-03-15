import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/do';

import { PlaceModel } from '../contract/models/place-model';
import { LocationModel } from '../contract/models/location-model';
import { PolygonManager } from '@agm/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class PlaceService {

	private placeCollection: PlaceModel[] = [];
	private origPlaces: any;
	private baseUrl: String = 'https://ion3-map-camera.firebaseio.com/';
	private docName: String = 'place-collection.json';
	private fbUrl = `${this.baseUrl}${this.docName}`;

	constructor(
		private httpCli: HttpClient,
		private storage: Storage
	) { }

	addNewPlace(title: string, desc: string, imgurl: string = 'fake-url-img', location: LocationModel) {
		const imgUrl = imgurl ? imgurl : 'fake-img-url';
		const placeObj: PlaceModel = new PlaceModel(title, desc, imgUrl, location);
		// this.placeCollection.push(placeObj);
		this.storePlacesInLocal(this.placeCollection, placeObj);
		return this.httpCli.post(this.fbUrl, placeObj);
	}

	private storePlacesInLocal(places, currentPlace) {
		this.storage.set('localPlaces', places)
			.then(() => {
				console.log('storage successfully.');
			})
			.catch((err) => {
				console.log('38 -- err: ', err);
				this.placeCollection.splice(places.indexOf(currentPlace), 1);
			});
	};

	private handleFbData(fbData) {
		const tmpData: PlaceModel[] = [];
		for (const key in fbData) {
			if (fbData.hasOwnProperty(key)) {
				const elem = fbData[key];
				tmpData.push(elem);
			}
		}
		return tmpData;
	}

	fetchStoragePlaces() {
		this.storage.get('localPlaces')
			.then((places: PlaceModel[]) => {
				console.log('57 -- ', places);
				this.placeCollection = places !== null ? places : [];
				console.log('59 -- ', this.placeCollection);
			})
			.catch((err) => {
				console.log(`fetch storage places error: ${err}.`);
			});
	}

	loadPlaces() {
		this.placeCollection = [];
		return this.httpCli.get(this.fbUrl)
			.do((places: PlaceModel[] | null) => {
				if (places) {
					this.origPlaces = places;
					for (const key in places) {
						if (places.hasOwnProperty(key)) {
							this.placeCollection.push(places[key]);
						}
					}
					console.log('76 -- ', this.placeCollection);
					return this.placeCollection;
				} else {
					this.placeCollection = [];
					return [];
				}
			});
	}

	replyPlaces() {
		return this.placeCollection;
	}

	deletePlace(idx: number = 0) {
		const tmpPlace = this.placeCollection[idx];
		let placeObjKey = '';
		this.placeCollection.splice(idx, 1);
		for (const key in this.origPlaces) {
			if (Object.is(this.origPlaces[key], tmpPlace)) {
				placeObjKey = key;
			}
		}
		if (placeObjKey) {
			delete this.origPlaces[placeObjKey];
		}
		this.storage.remove('localPlaces');
		// return this.httpCli.delete(`${this.baseUrl}place-collection/${placeObjKey}`);
	}

}
