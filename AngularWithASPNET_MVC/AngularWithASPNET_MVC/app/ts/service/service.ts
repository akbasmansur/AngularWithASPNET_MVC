import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class myService {
    private _url: string = "../DATA/data.json";
    constructor(private _http: Http) { }
    getProduct() {
        return this._http.get(this._url)
            .map((response: Response) => response.json());
    }
}