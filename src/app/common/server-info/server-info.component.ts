import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'openfact-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.scss']
})
export class ServerInfoComponent implements OnInit {

  serverInfo: any = {
    systemInfo: {},
    memoryInfo: {}
  };
  //spis = new Collections.Dictionary<String, any>();

  tab = 'serverInfo';

  constructor(/*private dataService: DataService*/) { }

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    /*this.dataService.serverInfo().get().subscribe(
      (data) => {
        this.serverInfo = data;

        this.spis = new Collections.Dictionary<String, any>();
        for (const key in data['providers']) {
          if (key) {
            this.spis.setValue(key, data['providers'][key]);
          }
        }
      }
    );*/
  }

}
