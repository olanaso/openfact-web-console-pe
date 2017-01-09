import { Component, OnInit } from '@angular/core';
import * as Collections from 'typescript-collections';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';

@Component({
  selector: 'of-server-info-providers',
  templateUrl: './server-info-providers.component.html',
  styleUrls: ['./server-info-providers.component.scss']
})
export class ServerInfoProvidersComponent implements OnInit {

  private spis = new Collections.Dictionary<String, any>();

  constructor(
    private dataService: DataService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.serverInfo().get().subscribe(result => {
      this.spis = new Collections.Dictionary<String, any>()
      for (let key in result['providers']) {
        this.spis.setValue(key, result['providers'][key]);
      }
    });
  }

}
