import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './directive-routing.module';

import { StockComponent } from './pages/stock/stock.component';
import { BondComponent } from './pages/bond/bond.component';

import { DirectiveService } from './services/directive.services';

@NgModule({
  imports: [
    CommonModule,
    RoutesRoutingModule
  ],
  declarations: [
    StockComponent,
    BondComponent
  ],
  providers: [
    DirectiveService
  ]
})

export class DirectiveModule { }
