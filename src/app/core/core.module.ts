import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { CarListComponent } from './components/car-list/car-list.component';
import { CarDetailsComponent } from './components/car-details/car-details.component';
import {TableModule} from 'primeng/table';
import {CardModule} from 'primeng/card'
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } 
    from "@angular/platform-browser/animations";
import { ButtonModule } from 'primeng/button';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog'

@NgModule({
  declarations: [
    CarListComponent,
    CarDetailsComponent
    ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    TableModule,
    BrowserModule,
    BrowserAnimationsModule,
    CardModule,
    ButtonModule,
    DynamicDialogModule,
    HttpClientModule
  ],
  providers:[
    DialogService
  ]
})
export class CoreModule { }
