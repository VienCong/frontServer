import { Component, OnInit } from '@angular/core';
import { DirectiveService } from '../../services/directive.services';

@Component({
    selector: 'app-stock',
    templateUrl: './stock.component.html',
    styleUrls: ['./stock.component.scss']
})
export class StockComponent implements OnInit {

    constructor(
        private directiveService: DirectiveService
    ) {
    }

    ngOnInit() {

    }

    getStockDetail() {
        this.directiveService.getStock({}, res => {
            console.log(res, 'stock返回数据');
        });
        console.log('Stock-天使');
    }

    getOrgDetail() {
        this.directiveService.getOrganization({}, res => {
            console.log(res, 'org返回数据');
        });
        console.log('Org-天使');
    }
}
