import { Component, OnInit } from '@angular/core';
// import { reorderArray } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';

import { Store } from '@ngrx/store';
import * as fromAppReducer from '../../../store/app-store/app.reducers';
import * as fromScrollReducer from '../../../store/scroll-store/scroll.reducers';
// import * as siActions from '../../../store/scroll-store/scroll.actions';

@Component({
	selector: 'scroll-vlist',
	templateUrl: 'scroll-vlist.html'
})
export class ScrollVirtualListPage implements OnInit {

	imgCompuLangs: Observable<fromScrollReducer.ScrollArrStateInterface>;

	constructor(
		private store: Store<fromAppReducer.AppState>
	) { }

	ngOnInit() {
		this.imgCompuLangs = this.store.select('imgs');
	}

	virtualHeaderFunction(record, recordIndex, records) {
		if (recordIndex % 3 === 0) {
			return 'Header ' + recordIndex;
		}
		return null;
	}

}
