import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Response, URLSearchParams } from '@angular/http';

import { Headers, ResponseContentType } from '@angular/http';
import { saveAs } from 'file-saver';

import { RestangularOpenfact } from './restangular-openfact';
import { Organization } from '../models/organization.model';
import { SearchResults } from '../models/search-results.model';
import { SearchCriteria } from '../models/search-criteria.model';
import { KeysMetadata } from '../models/keys-metadata.model';

/*General*/
export const storageFileIdName: string = 'id';
export const storageFileBasePath: string = 'storage-files';
/*Sunat*/
export const basePath: string = 'sunat';
export const extensionPath: string = 'ubl-extensions';
@Injectable()
export class StorageFileService {

  private restangular: RestangularOpenfact;

    constructor(restangular: RestangularOpenfact) {
        this.restangular = restangular;
    }

    download(organization: Organization, id: string) {
      let restangular = organization.restangular.one(storageFileBasePath, id);
        return restangular.http
            .get(restangular.path, {
                headers: new Headers(),
                responseType: ResponseContentType.Blob
            })
            .map(response => {
                let file = {
                    file: response.blob(),
                    fileName: (this['fileName'] || 'file')
                };
                return file;
            }).subscribe(result => {
                saveAs(result.file, result.fileName);
            }, error => {
                Observable.throw(error);
            });
    }
  sunatDownload(organization: Organization, id: string) {
    let restangular= this.restangular.one("organizations", organization.organization)
      .all(basePath)
      .all(extensionPath)
      .one(storageFileBasePath, id);

   // let restangular = organization.restangular.all(basePath).all(extensionPath).one(storageFileBasePath, id);
    return restangular.http
      .get(restangular.path, {
        headers: new Headers(),
        responseType: ResponseContentType.Blob
      })
      .map(response => {
        let file = {
          file: response.blob(),
          fileName: (this['fileName'] || 'file')
        };
        return file;
      }).subscribe(result => {
        saveAs(result.file, result.fileName);
      }, error => {
        Observable.throw(error);
      });
  }
}
