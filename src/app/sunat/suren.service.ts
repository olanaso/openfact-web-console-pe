import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Configuration } from '../app.suren';
import { Http } from '@angular/http';

@Injectable()
export class SurenService {

    private actionUrl: string;

    constructor(private http: Http, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl;
    }
    public search(id: string): Observable<any> {
        if (id.length === 11) {
            return this.http.get(this.actionUrl + 'organization/' + id).map(response => {
                const data = response.json();
                return data;
            });
        } else if (id.length === 8) {
            return this.http.get(this.actionUrl + 'people/' + id).map(response => {
                const data = response.json();
                return data;
            });
        }
    }
}
