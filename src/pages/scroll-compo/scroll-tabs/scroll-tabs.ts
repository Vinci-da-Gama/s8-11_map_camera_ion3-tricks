import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';

import { ScrollListPage } from '../scroll-list/scroll-list';
import { ScrollVirtualListPage } from '../scroll-virtual-list/scroll-vlist';

@Component({
	selector: 'page-scroll-tabs',
	templateUrl: 'scroll-tabs.html',
})
export class ScrollTabsPage {

	private defScrollTab: Number = 0;
	// @ViewChild('ion3infinitvirtualreorder') trickTabsNav: Tabs;
	private slp: any = ScrollListPage;
	private slvp: any = ScrollVirtualListPage;

	constructor(
		private navCtrl: NavController,
		private navParams: NavParams
	) { }

	ionViewDidLoad() {
		// this will cause double root problem --> so use selectedIndex.
		// this.trickTabsNav.select(0);
	}

}
