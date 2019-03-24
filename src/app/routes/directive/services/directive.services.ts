import { Injectable } from '@angular/core';
import { HttpUtil } from '../../../../util/httpUtil';

@Injectable({
    providedIn: 'root',
})
export class DirectiveService {
    constructor(
        public http: HttpUtil,
    ) { }

    getDetail(param, callback) {
        return this.http.post('directive/stock', param, callback);
    }
}
