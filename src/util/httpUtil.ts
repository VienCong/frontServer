import { HttpClient, HttpResponse, HttpHeaders, HttpErrorResponse, HttpRequest } from '@angular/common/http';
import { Observable, of, pipe, throwError, observable, ErrorObserver } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { environment } from '../environments/environment';

const httpOptions = {
    header: new HttpHeaders({ 'Content-Type': 'application/json' }),
    reportProgress: true,
    withCredentials: false
};

const httpGetOption = {
    reportProgress: true,
    withCredentials: false
};

const httpFormOption = {
    reportProgress: true,
    withCredentials: false
};

export class ResponseType {
    code: number;
    data: any;
    msg: string;
}

@Injectable()
export class HttpUtil {
    private baseUrl: string;

    constructor(private http: HttpClient) {
        this.baseUrl = environment.baseUrl;
    }

    // POST请求
    public post(url: string, body?: any | null, callback?, needPromise = false, isUpload = false) {
        // 请求后台的统一资源标识符
        const uri = this.baseUrl + url; // url是统一资源定位符
        if (!needPromise) {
            const request = new HttpRequest('POST', uri, body, !isUpload ? httpOptions : httpFormOption);
            const subscribeFun = this.http.request(request).subscribe(
                res => {
                    if (res.type < 4) {
                        console.log('http进度显示', res.type);
                        // TODO: http进度显示
                    } else {
                        if (callback) {
                            callback(res['body']);
                            subscribeFun.unsubscribe();
                        }
                    }
                },
                err => {
                    subscribeFun.unsubscribe();
                    catchError(this.handleError);
                });
        } else {
            return new Promise((resolve, reject) => {
                const request = new HttpRequest('POST', uri, body, httpOptions);
                const subscribeFun = this.http.request(request).subscribe(
                    res => {
                        if (res.type < 4) {
                            // TODO: http进度显示
                        } else {
                            if (callback) {
                                // 返回一个promise
                                resolve(callback(res['body']));
                                subscribeFun.unsubscribe();
                            }
                        }
                    },
                    err => {
                        reject(err);
                        subscribeFun.unsubscribe();
                        catchError(this.handleError);
                    });
            });
        }
    }

    // 请求错误统一处理
    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('http出错：', error.error.message);
        } else {
            console.error(`出错状态码：${error.status}, ` + `出错：${error.error}`);
        }
        return throwError({
            status: error.status,
            error: error
        });
    }

}

