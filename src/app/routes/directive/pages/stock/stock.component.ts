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

    getDetail() {
        this.directiveService.getDetail({}, res => {
            console.log(res, 'node返回数据');
        });
        console.log('天使');
    }
}
