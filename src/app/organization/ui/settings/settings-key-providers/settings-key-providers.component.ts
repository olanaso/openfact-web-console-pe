import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs/Subscription';
import { URLSearchParams } from '@angular/http';
import { Organization } from '../../../../core/model/organization.model';
import { DataService } from '../../../../core/data/data.service';
import { DialogService } from '../../../../core/dialog/dialog.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'of-settings-key-providers',
  templateUrl: './settings-key-providers.component.html',
  styles: [``]
})
export class SettingsKeyProvidersComponent implements OnInit, OnDestroy {

  loading = false;

  dataSubscription: Subscription;

  organization: Organization;
  serverInfo: any;
  enableUpload = false;

  providers: any;
  instances: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private modalService: NgbModal,
              private dataService: DataService,
              private toastr: ToastsManager,
              private dialogService: DialogService) {
  }

  ngOnInit() {
    this.dataSubscription = this.route.data.subscribe(data => {
      this.organization = data['organization'];
      this.serverInfo = data['serverInfo'];
      this.providers = this.serverInfo.componentTypes['org.openfact.keys.KeyProvider'];
      this.loadComponents();
    });
  }

  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
  }

  loadComponents() {
    const queryParams = new URLSearchParams();
    queryParams.set('type', 'org.openfact.keys.KeyProvider');
    queryParams.set('parent', this.organization.id);

    this.loading = true;

    this.organization.getComponents(queryParams).subscribe(
      (data) => {
        this.instances = data;
        this.loading = false;
      }, () => {
        this.loading = false;
      }
    );
  }

  addProvider(provider) {
    this.router.navigate(['./', provider], { relativeTo: this.route });
  };

  editInstance(instance) {
    this.router.navigate(['./', instance.providerId, instance.id], { relativeTo: this.route });
  }

  removeInstance(instance) {
    this.dialogService.confirmDelete(instance.name, 'Component').result.then(
      (result) => {
        this.organization.removeComponent(instance.id).subscribe(
          (data) => {
            this.toastr.success('The provider has been deleted.');
            this.loadComponents();
          }
        );
      }
    );
  }

}
