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
import {SatDatepickerModule, SatNativeDateModule} from 'saturn-datepicker';
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
    LcdComponent
  ],
  imports: [
    BrowserModule,
    Angular2ImageGalleryModule,
    AppRoutingModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SatDatepickerModule,
    SatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBPV70NhMCXyhLEljZeUys0Rp_QfxED7nE'
    }),
    MatFormFieldModule
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
