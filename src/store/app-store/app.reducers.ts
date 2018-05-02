import { ActionReducerMap } from '@ngrx/store';

import * as fromScrollReducer from '../scroll-store/scroll.reducers';

export interface AppState {
	imgs: fromScrollReducer.ScrollArrStateInterface
}

export const AppReducers: ActionReducerMap<AppState> = {
	imgs: fromScrollReducer.ScrollReducer
}
