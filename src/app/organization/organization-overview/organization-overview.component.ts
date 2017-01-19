import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { URLSearchParams } from '@angular/http';
import { Subscription } from 'rxjs/Subscription';
import { Organization } from '../../core/models/organization.model';
import { DataService } from '../../core/data/data.service';

declare var c3: any;

@Component({
  selector: 'of-organization-overview',
  templateUrl: './organization-overview.component.html',
  styleUrls: ['./organization-overview.component.scss']
})
export class OrganizationOverviewComponent implements OnInit, OnDestroy {

  private dataSubscription: Subscription;
  private organization: Organization;

  private providers;
  private jobReports: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private dataService: DataService)
  { }

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.data.subscribe(data => {
      this.organization = data["organization"];
      this.refreshData();
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  refreshData() {
    this.dataService.jobReports().getProviders(this.organization).subscribe(data => {
      this.providers = data;

      let queryParams: URLSearchParams = new URLSearchParams();
      queryParams.set("jobName", this.providers);
      queryParams.set("first", "0");
      queryParams.set("max", this.providers.length);

      this.dataService.jobReports().getAll(this.organization, queryParams).subscribe(data => {
        this.jobReports = data;
        this.refreshC3();
      });
    });
  }

  refreshC3() {
    /*this.jobReports.forEach(jobReport => {
      jobReport.c3 = c3.generate({
        bindto: "#" + jobReport.id,
        data: {
          columns: [
            ['data1', 30],
            ['data2', 120],
          ],
          type: 'donut'
        }
      });
    });*/
  }
}
