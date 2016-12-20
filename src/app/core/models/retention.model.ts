/**
 * Created by lxpary on 15/12/16.
 */
import { Model } from './model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Response, Headers, ResponseContentType } from '@angular/http';

import { saveAs } from 'file-saver';

export class Retention extends Model {
  id: String;

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

  downloadPdf() {
    let restangular = this.restangular.all("representation/pdf");
    let url = restangular.path;

    return restangular.http
      .get(url, {
        headers: new Headers(),
        responseType: ResponseContentType.Blob
      })
      .map(response => {
        let file = {
          file: response.blob(),
          fileName: (this['documentId'] || 'file') + '.pdf'
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

}
