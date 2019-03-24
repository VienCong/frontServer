import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const Routes: Routes = [
    {
        path: 'directive',
        loadChildren: './directive/directive.module#DirectiveModule'
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(Routes)
    ],
    exports: [
        RouterModule
    ]
})
export class RoutesRoutingModule { }
