import { ImgObjInterface } from '../../contract/interfaces/imgobj-interface';
import * as siActions from './scroll.actions';

export interface ScrollArrStateInterface {
	imgs: ImgObjInterface[]
}

const initialImgState: ScrollArrStateInterface = {
	imgs: [
		{
			imgUrl: '../../assets/imgs/dig.png',
			title: 'dig img',
			desc: 'dig description',

		},
		{
			imgUrl: '../../assets/imgs/c++.png',
			title: 'c++ img',
			desc: 'c++ description',

		},
		{
			imgUrl: '../../assets/imgs/code0.png',
			title: 'code0 img',
			desc: 'code0 description',

		},
		{
			imgUrl: '../../assets/imgs/gim.png',
			title: 'gim img',
			desc: 'gim description',

		},
		{
			imgUrl: '../../assets/imgs/js.png',
			title: 'js img',
			desc: 'js description',

		},
		{
			imgUrl: '../../assets/imgs/jsp.png',
			title: 'jsp img',
			desc: 'jsp description',

		},
		{
			imgUrl: '../../assets/imgs/logo.png',
			title: 'logo img',
			desc: 'logo description',

		},
		{
			imgUrl: '../../assets/imgs/num.png',
			title: 'num img',
			desc: 'num description',

		},
		{
			imgUrl: '../../assets/imgs/processing.png',
			title: 'processing img',
			desc: 'processing description',

		},
		{
			imgUrl: '../../assets/imgs/python.ico',
			title: 'python img',
			desc: 'python description',

		},
		{
			imgUrl: '../../assets/imgs/rem.png',
			title: 'rem img',
			desc: 'rem description',

		},
		{
			imgUrl: '../../assets/imgs/sublime.png',
			title: 'sublime img',
			desc: 'sublime description',

		},
		{
			imgUrl: '../../assets/imgs/swift.png',
			title: 'swift img',
			desc: 'swift description',

		},
		{
			imgUrl: '../../assets/imgs/web.ico',
			title: 'web img',
			desc: 'web description',

		}
	]
};

export function ScrollReducer(state = initialImgState, action: siActions.ScrollImageActions) {
	switch (siActions.SET_IMAGES) {
		case (action.type):
			return {
				...state,
				imgs: [...action.payload]
			};
		default:
			return state;
	}
}
