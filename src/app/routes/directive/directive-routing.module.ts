import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StockComponent } from './pages/stock/stock.component';
import { BondComponent } from './pages/bond/bond.component';

const DirectiveRoutes: Routes = [
    {
        path: 'stock',
        component: StockComponent
    },
    {
        path: 'bond',
        component: BondComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(DirectiveRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutesRoutingModule { }
