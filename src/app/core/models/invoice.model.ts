import { Model } from './model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Response, Headers, ResponseContentType, URLSearchParams } from '@angular/http';

import { Restangular } from '../data/restangular';
import { saveAs } from 'file-saver';

export class Invoice extends Model {

    id: string;
    documentId: string;

    constructor(restangular: Restangular) {
        super();
        this.restangular = restangular;
    }

    getJsonRepresentation(): Observable<any> {
        return this.restangular
            .all("representation/json")
            .get()
            .map(response => response.json());
    }

    reload() {
        return this.restangular.get()
            .map(response => Object.assign(new Invoice(this.restangular), <Invoice>response.json()));
    }

    getSendEvents(queryParams?: URLSearchParams): Observable<any> {
        return this.restangular.all('send-events')
            .get(queryParams)
            .map(response => response.json());
    }

    downloadXml() {
        let restangular = this.restangular.all("representation/xml");
        let url = restangular.path;

        return restangular.http
            .get(url, {
                headers: new Headers(),
                responseType: ResponseContentType.Blob
            })
            .map(response => {
                let file = {
                    file: response.blob(),
                    fileName: (this['documentId'] || 'file') + '.xml'
                };
                return file;
            }).subscribe(result => {
                saveAs(result.file, result.fileName);
            }, error => {
                Observable.throw(error);
            });
    }

    downloadReport(queryParams?: URLSearchParams) {
        let restangular = this.restangular.all("report");
        let url = restangular.path;

        return restangular.http
            .get(url, {
                headers: new Headers(),
                responseType: ResponseContentType.Blob,
                search: queryParams
            })
            .map(response => {
                let fileExtension: string = "";
                if (queryParams.get("format")) {
                    fileExtension = "." + queryParams.get("format");
                }

                let file = {
                    file: response.blob(),
                    fileName: (this['documentId'] || 'file') + fileExtension
                };
                return file;
            }).subscribe(result => {
                saveAs(result.file, result.fileName);
            }, error => {
                Observable.throw(error);
            });
    }

    sendToCustomer() {
        return this.restangular.all("send-to-customer").post();
    }

    sendToThirdParty() {
        return this.restangular.all("send-to-third-party").post();
    }

    sendToThirdPartyByEmail(obj: any) {
        return this.restangular.all("send-to-third-party-by-email").post(obj);
    }

    setId(id: string): Invoice {
        this.id = id;
        return this;
    }

    setDocumentId(documentId: string): Invoice {
        this.documentId = documentId;
        return this;
    }

}