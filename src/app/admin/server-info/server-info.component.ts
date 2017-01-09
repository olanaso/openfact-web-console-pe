import { Component, OnInit } from '@angular/core';

import { DataService } from '../../core/data/data.service';
import { AlertService } from '../../core/alert/alert.service';

@Component({
  selector: 'of-server-info',
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
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.dataService.serverInfo().get().subscribe(result => {
      this.serverInfo = result;
    });
  }

}
