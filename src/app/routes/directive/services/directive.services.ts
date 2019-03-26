import { Injectable } from '@angular/core';
import { HttpUtil } from '../../../../util/httpUtil';

@Injectable({
    providedIn: 'root',
})
export class DirectiveService {
    constructor(
        public http: HttpUtil,
    ) { }

    getStock(param, callback) {
        return this.http.post('directive/stock', param, callback);
    }

    getOrganization(param, callback) {
        return this.http.post('organization/group', param, callback);
    }
}
