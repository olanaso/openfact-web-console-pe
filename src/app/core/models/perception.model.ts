/**
 * Created by lxpary on 14/12/16.
 */
import { Model } from './model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Response, Headers, ResponseContentType } from '@angular/http';

import { saveAs } from 'file-saver';

export class Perception extends Model {
  id: String;

  downloadXml(perception:Perception) {
    let restangular = perception.restangular.all("representation/xml");
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

  downloadPdf(perception:Perception) {
    let restangular = perception.restangular.all("representation/pdf");
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

  sendToCustomer(perception:Perception) {
    return perception.restangular.all("send-to-customer").post();
  }

  sendToThirdParty(perception:Perception) {
    return perception.restangular.all("send-to-third-party").post();
  }

}
