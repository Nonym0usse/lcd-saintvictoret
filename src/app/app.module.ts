import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import { Bureau1Component } from './bureau1/bureau1.component';
import { Bureau2Component } from './bureau2/bureau2.component';
import { Bureau3Component } from './bureau3/bureau3.component';
import { Bureau4Component } from './bureau4/bureau4.component';
import { Bureau5Component } from './bureau5/bureau5.component';
import { Bureau6Component } from './bureau6/bureau6.component';
import {Angular2ImageGalleryModule} from 'angular2-image-gallery';
import { AgmCoreModule } from '@agm/core';
import { LcdComponent } from './lcd/lcd.component';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import { NgxPayPalModule } from 'ngx-paypal';
import {MAT_DATE_LOCALE, SatDatepickerModule, SatNativeDateModule} from 'saturn-datepicker';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
var config = {
  apiKey: "AIzaSyBUbgy2l_KvWiuEwG-dh20YcYEiu6q8sTY",
  authDomain: "lcd-saintvic.firebaseapp.com",
  databaseURL: "https://lcd-saintvic.firebaseio.com",
  projectId: "lcd-saintvic",
  storageBucket: "lcd-saintvic.appspot.com",
  messagingSenderId: "766808734387",
  appId: "1:766808734387:web:aba52592b87c249689cec6",
  measurementId: "G-70WM5WZVZW"
};

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Bureau1Component,
    Bureau2Component,
    Bureau3Component,
    Bureau4Component,
    Bureau5Component,
    Bureau6Component,
    LcdComponent,
    HeaderComponent
  ],
  imports: [
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule,// storage
    BrowserModule,
    NgxPayPalModule,
    Angular2ImageGalleryModule,
    AppRoutingModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SatDatepickerModule,
    SatNativeDateModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBPV70NhMCXyhLEljZeUys0Rp_QfxED7nE'
    }),
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [
    MatDatepickerModule,
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
