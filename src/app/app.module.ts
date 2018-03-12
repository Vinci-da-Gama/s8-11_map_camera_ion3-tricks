import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';

import { NativeMapCameraIon3TricksApp } from './app.component';
import { WelcomeIntroPage } from '../pages/welcome-intro/welcome-intro';
import { NativeTabsContainer } from '../pages/nativeplugings-tabs-container/nativeplugings-tabs-container';
import { NativeplugingsTabsPage } from '../pages/nativeplugings-tabs/nativeplugings-tabs';
import { TricksTabsContainerPage } from '../pages/tricks-tabs-container/tricks-tabs-container';
import { TricksTabsPage } from '../pages/tricks-tabs/tricks-tabs';
import { PlacePage } from '../pages/place/place';
import { AddPlacePage } from '../pages/add-place/add-place';
import { SetPlacePage } from '../pages/set-place/set-place';
import { BackbtnConfigPage } from '../pages/backbtn-config/backbtn-config';
import { BackbtnHideshowPage } from '../pages/backbtn-hideshow/backbtn-hideshow';
import { ScreenOrientationPage } from '../pages/screen-orientation/screen-orientation';
import { WhatPlatformPage } from '../pages/what-platform/what-platform';


import { SideMenuToggleBtn } from '../shared/directives/side-menu-toggle/side-menu-toggle';
import { ErrorhandlerProvider } from '../shared/providers/errorhandler';

@NgModule({
	declarations: [
		NativeMapCameraIon3TricksApp,
		WelcomeIntroPage,
		NativeTabsContainer,
		NativeplugingsTabsPage,
		TricksTabsContainerPage,
		TricksTabsPage,
		PlacePage,
		AddPlacePage,
		SetPlacePage,
		BackbtnConfigPage,
		BackbtnHideshowPage,
		ScreenOrientationPage,
		WhatPlatformPage,
		SideMenuToggleBtn
	],
	imports: [
		BrowserModule,
		HttpClientModule,
		IonicModule.forRoot(
			NativeMapCameraIon3TricksApp,
			{
				backButtonText: 'Go Back',
				modalEnter: 'modal-slide-in',
				modalLeave: 'modal-slide-out',
				tabsPlacement: 'bottom',
				pageTransition: 'ios-transition',
				platforms: {
					ios: {
						tabsPlacement: 'top',
					}
				}
			}
		)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		NativeMapCameraIon3TricksApp,
		WelcomeIntroPage,
		NativeTabsContainer,
		NativeplugingsTabsPage,
		TricksTabsContainerPage,
		TricksTabsPage,
		PlacePage,
		AddPlacePage,
		SetPlacePage,
		BackbtnConfigPage,
		BackbtnHideshowPage,
		ScreenOrientationPage,
		WhatPlatformPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		Geolocation,
		Camera,
		File,
		{ provide: APP_BASE_HREF, useValue: '/' },
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		ErrorhandlerProvider
	]
})
export class AppModule { }
