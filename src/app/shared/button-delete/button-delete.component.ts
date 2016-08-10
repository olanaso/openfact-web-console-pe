import { Component, ViewChild, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_DIRECTIVES } from '@angular/common';

import { MODAL_DIRECTIVES, BS_VIEW_PROVIDERS, ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { Alert } from '../../services/alert';
import { Model } from '../../services/models/model';
import { AlertMessageService } from '../../services/alert-message.service';

@Component({
  moduleId: module.id,
  selector: 'button-delete',
  templateUrl: 'button-delete.component.html',
  styleUrls: ['button-delete.component.css'],
  directives: [MODAL_DIRECTIVES, CORE_DIRECTIVES],
  providers: [BS_VIEW_PROVIDERS],
})
export class ButtonDeleteComponent implements OnInit {

  @ViewChild('modalResource') modalResource: ModalDirective;

  // Object to be deleted
  @Input() model: Model;

  // Type display name for kind.
  @Input() type: String;

  // Name of the resource to delete.
  @Input() resourceName: String;

  // Alerts object for success and error alerts.
  @Input() alerts: Array<Alert>;

  // Set to true to disable the delete button.
  @Input() disableDelete: boolean;

  // Optional link label. Defaults to "Delete".
  @Input() label: string;

  // Only show a delete icon with no text.
  @Input() buttonOnly: boolean;

  // Stay on the current page without redirecting to the resource list.
  @Input() stayOnCurrentPage: boolean = true;

  // Optional callback when the delete succeeds
  @Output() success: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Optional redirect URL when the delete succeeds
  @Input() redirectUrl: string;

  constructor(
    private router: Router,
    private alertMessageService: AlertMessageService) { }

  ngOnInit() {
  }

  delete() {
    this.model.restangular.delete().subscribe(
      result => {
        this.showAlert({
          type: 'success',
          message: this.type + 'deleted'
        });

        // callback
        this.success.emit(true);

        // navigate
        if (!this.stayOnCurrentPage) {
          let link = [this.redirectUrl];
          this.router.navigate(link);
        }

        this.hideModalResource();
      }, error => {
        if (this.alerts != null) {
          this.alerts.push({
            type: 'error',
            message: this.type + ' could not be deleted',
            details: error
          });
        }
        this.hideModalResource();
      });;
  }

  cancel() {
    this.hideModalResource();
  }

  showAlert(alert: Alert) {
    if (this.stayOnCurrentPage && this.alerts != null) {
      this.alerts.push(alert);
    } else {
      this.alertMessageService.addAlert(alert);
    }
  }

  public showModalResource(): void {
    if (this.disableDelete) {
      return;
    }
    this.modalResource.show();
  }

  public hideModalResource(): void {
    this.modalResource.hide();
  }

}
