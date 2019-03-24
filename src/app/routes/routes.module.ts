import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// 项目模块
import { RoutesRoutingModule } from './routes-routing.module';


@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule
  ],
  declarations: [

  ]
})

export class RoutesModule { }
