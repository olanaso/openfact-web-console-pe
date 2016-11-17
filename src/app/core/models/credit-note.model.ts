import { Model } from './model';
import { Observable } from 'rxjs/Observable';
import { Headers, ResponseContentType } from '@angular/http';

import { saveAs } from 'file-saver';

export class CreditNote extends Model {
    id: String;

    downloadXml() {
        let restangular = this.restangular.all("xml");
        let url = restangular.path;

        return restangular.http
            .get(url, {
                headers: new Headers(),
                responseType: ResponseContentType.Blob
            })
            .map(response => {
                let file = {
                    file: response.blob(),
                    fileName: (this['idUbl'] || 'file') + '.xml'
                };
                return file;
            }).subscribe(result => {
                saveAs(result.file, result.fileName);
            }, error => {
                Observable.throw(error);
            });
    }
}