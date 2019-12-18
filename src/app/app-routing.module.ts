import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Bureau1Component} from './bureau1/bureau1.component';
import {Bureau2Component} from './bureau2/bureau2.component';
import {Bureau3Component} from './bureau3/bureau3.component';
import {Bureau4Component} from './bureau4/bureau4.component';
import {Bureau6Component} from './bureau6/bureau6.component';
import {Bureau5Component} from './bureau5/bureau5.component';
import {LcdComponent} from './lcd/lcd.component';


const routes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'bureau1',  component: Bureau1Component },
  { path: 'bureau2',  component: Bureau2Component },
  { path: 'bureau3',  component: Bureau3Component },
  { path: 'bureau4',  component: Bureau4Component },
  { path: 'bureau5',  component: Bureau5Component },
  { path: 'bureau6',  component: Bureau6Component },
  { path: 'louer-courte-duree',  component: LcdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
