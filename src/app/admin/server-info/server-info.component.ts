import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data/data.service';
import { AlertService } from '../../components/alerts/alert.service';

@Component({
  selector: 'app-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.scss']
})
export class ServerInfoComponent implements OnInit {

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
