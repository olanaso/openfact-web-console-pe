import { Component, OnInit } from '@angular/core';
import * as Collections from 'typescript-collections';

import { DataService } from '../../services/data/data.service';
import { AlertService } from '../../components/alerts/alert.service';

@Component({
  selector: 'app-server-info-providers',
  templateUrl: './server-info-providers.component.html',
  styleUrls: ['./server-info-providers.component.scss']
})
export class ServerInfoProvidersComponent implements OnInit {

  private filterText: string;
  private spis = new Collections.Dictionary<String, any>();

  constructor(
    private dataService: DataService,
    private alertService: AlertService
  ) {
    this.loadData(); this.spis.getValue
  }

  ngOnInit() { }

  loadData() {
    this.dataService.serverInfo().get().subscribe(
      result => {
        let map = new Collections.Dictionary<String, any>()
        for (let key in result['providers']) {
          map.setValue(key, result['providers'][key]);
        }
        this.spis = map;
      }, error => {
        this.alertService.pop('error', 'Error', 'Error loading projects.');
      });
  }

}
