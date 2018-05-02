import { Action } from '@ngrx/store';
import { ImgObjInterface } from '../../contract/interfaces/imgobj-interface';

export const SET_IMAGES = 'SET_IMAGES';

export class SetImages implements Action {
	readonly type = SET_IMAGES;
	constructor(
		public payload: ImgObjInterface[]
	) { }
}

export type ScrollImageActions = SetImages;
