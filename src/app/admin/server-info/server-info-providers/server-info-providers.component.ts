import { Component, OnInit } from '@angular/core';

import { DataService, AlertService } from '../../../shared';

@Component({
  selector: 'app-server-info-providers',
  templateUrl: './server-info-providers.component.html',
  styleUrls: ['./server-info-providers.component.scss']
})
export class ServerInfoProvidersComponent implements OnInit {

  private serverInfo: any = {
    systemInfo: {},
    memoryInfo: {}
  };

  constructor(
    private dataService: DataService,
    private alertService: AlertService
  ) {
    this.loadData();
  }

  ngOnInit() { }

  loadData() {
    this.dataService.serverInfo().get().subscribe(
      result => {
        this.serverInfo = result;
      }, error => {
        this.alertService.pop('error', 'Error', 'Error loading projects.');
      });
  }

}
