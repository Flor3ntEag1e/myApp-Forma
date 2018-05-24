import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {AccordionModule} from 'primeng/accordion';     
import {MenuItem} from 'primeng/api';  
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SmdpComponent } from './smdp/smdp.component';
import {HttpClientModule } from '@angular/common/http';
import {SelectButtonModule} from 'primeng/selectbutton';
import {ChartModule} from 'primeng/chart'


@NgModule({
  imports: [
    CommonModule,
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SelectButtonModule,
    ChartModule
    
  ],
  declarations: [HomeComponent, SmdpComponent]
})
export class HomeModule { }
