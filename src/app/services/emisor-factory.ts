import { Injectable } from '@angular/core';


import { EmisorService  } from './emisor.service';
import { EMISOR } from './emisor-mock';
import { Emisor } from '../models/emisor';

import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

export class EmisorFactory {
    //constructor(private http: Http) { }

   // private emisoresUrl = 'app/heroes';  // URL to web API
    // getEmisores(): Observable<Emisor[]> {
    //     return this.http.get(this.emisoresUrl)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }
    // private extractData(res: Response) {
    //     let body = res.json();
    //     return body.data || {};
    // }
    // private handleError(error: any) {
    //     // In a real world app, we might use a remote logging infrastructure
    //     // We'd also dig deeper into the error to get a better message
    //     let errMsg = (error.message) ? error.message :
    //         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //     console.error(errMsg); // log to console instead
    //     return Observable.throw(errMsg);
    // }


    // createEmisor() {
    //     let emisor2 = new EmisorService();
    //     emisor2.ruc1 = '110110101';
    //     emisor2.urlEmisor='';
    //     return emisor2;
    // }
    // searchEmisores(){

    //     return true;
    // }

    getEmisores(){
        return Promise.resolve(EMISOR);

    }


    // getEmisores(): Promise<Emisor[]> {
    //     return this.http.get(this.emisoresUrl)
    //         .toPromise()
    //         .then(this.extractData)
    //         .catch(this.handleError);
    // }
    // private extractData(res: Response) {
    //     let body = res.json();
    //     return body.data || {};
    // }

    // private handleError(error: any) {
    //     // In a real world app, we might use a remote logging infrastructure
    //     // We'd also dig deeper into the error to get a better message
    //     let errMsg = (error.message) ? error.message :
    //         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //     console.error(errMsg); // log to console instead
    //     return Promise.reject(errMsg);
    // }








}
