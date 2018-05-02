import { Component, OnInit } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';

import { ImgObjInterface } from '../../../contract/interfaces/imgobj-interface';

@Component({
	selector: 'scroll-list',
	templateUrl: 'scroll-list.html'
})
export class ScrollListPage implements OnInit {

	imgCompuLangs: Array<ImgObjInterface>;

	constructor(
		/* private navCtrl: NavController,
		private navParams: NavParams */
	) { }

	ngOnInit() {
		// infinit scroll is about adding a certain number of items everytime.
		this.imgCompuLangs = [
			{
				imgUrl: '../../assets/imgs/c++.png',
				title: 'c++ img',
				desc: 'c++ description',

			},
			{
				imgUrl: '../../assets/imgs/dig.png',
				title: 'dig img',
				desc: 'dig description',

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
		];
	}

	doInfinite(infiniteScroll) {
		console.log('111 -- Begin async operation: ', infiniteScroll);

		setTimeout(() => {
			for (let i = 0; i < 20; i++) {
				this.imgCompuLangs.push(this.imgCompuLangs[i]);
			}

			console.log('Async operation has ended');
			infiniteScroll.complete();
		}, 500);
	}

	reorderImage(indexes) {
		console.log(indexes);
		this.imgCompuLangs = reorderArray(this.imgCompuLangs, indexes);
	}

}
