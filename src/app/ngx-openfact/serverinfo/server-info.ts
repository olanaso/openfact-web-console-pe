import { OPENFACT_API_URL } from './../api/openfact-api';
import { Injectable, Inject } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Logger } from '../../ngx-base';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ServerInfoService {

  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  private serverInfoUrl: string;

  constructor(
    private http: HttpClient,
    private logger: Logger,
    @Inject(OPENFACT_API_URL) apiUrl: string) {
    this.serverInfoUrl = apiUrl.endsWith('/') ? apiUrl + 'serverinfo' : apiUrl + '/serverinfo';
  }

  getServerInfo(): Observable<any> {
    return this.http
      .get(`${this.serverInfoUrl}`, { headers: this.headers })
      .map(response => {
        return response as any[];
      });
  }

}
