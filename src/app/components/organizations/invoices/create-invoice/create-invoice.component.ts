import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
//import {Component, View, formDirectives, FormBuilder, Validators, ControlGroup} from "@angular2/core";
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder,NgForm } from '@angular/forms';
import { CORE_DIRECTIVES, Validators, ControlGroup} from '@angular/common';
import { ProjectHeaderComponent } from './../../../util/project-header';
import { ProjectPageComponent } from './../../../util/project-page';
import { MODAL_DIRECTIVES, ModalDirective, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';

import { AlertMessageService } from '../../../../services/alert-message.service';
import { DefaultHeaderComponent } from '../../../util/default-header';
import { ButtonSaveComponent } from '../../../util/button-save';
import { ButtonCancelComponent } from '../../../util/button-cancel';
import { AlertsComponent } from '../../../util/alerts';
/**models */
import { InvoiceModel } from '../../../../../app/services/models/invoice-model';
import { LinesModel } from '../../../../../app/services/models/lines-model';
import { CustomerModel } from '../../../../../app/services/models/customer-model';
import { Alert } from '../../../../services/alert';
// import { Moneda } from '../../../../../app/models/moneda';
/**service */
import { InvoiceProviderService } from '../../../../../app/services/providers/invoice-provider.service';
import { CustomerProviderService } from '../../../../../app/services/providers/customer-provider.service';

@Component({
  moduleId: module.id,
  selector: 'app-create-invoice',
  templateUrl: 'create-invoice.component.html',
  styleUrls: ['create-invoice.component.css'],
  directives: [ROUTER_DIRECTIVES, MODAL_DIRECTIVES, CORE_DIRECTIVES, ProjectHeaderComponent, ProjectPageComponent, DefaultHeaderComponent, ButtonSaveComponent, ButtonCancelComponent, AlertsComponent],
  viewProviders: [BS_VIEW_PROVIDERS],
  providers: [InvoiceProviderService, CustomerProviderService]
})
export class CreateInvoiceComponent implements OnInit {
  @ViewChild('childModal') public childModal: ModalDirective;
  selectInvoice: InvoiceModel;
  selectLines: LinesModel;
  //form1: FormGroup;
  alerts: Array<Alert> = [];

  constructor(invoiceService: InvoiceProviderService
    , customerService: CustomerProviderService
    , private router: Router
    , private alertMessageService: AlertMessageService
    , private formBuilder: FormBuilder) {
    this.selectInvoice = invoiceService.build();;
    this.selectInvoice.lines = new Array<LinesModel>();
    this.selectInvoice.customer = customerService.build();
    this.selectLines = new LinesModel();
    //console.log(JSON.stringify(this.selectInvoice));
  }

  ngOnInit() {
    this.loadAlerts();
    //this.buildForm();
  }


  addDetails(linesModel: LinesModel) {
    // if (this.loginForm.valid) {
    //   if (!this.selectFacturaDetalle.id) {
    //     this.selectFacturaDetalle.id = (this.selectFactura.lines.length + 1),
    //     this.selectFacturaDetalle.quantity = this.quantityControl.value,
    //     this.selectFacturaDetalle.itemDescription = this.descryptionControl.value,
    //     this.selectFacturaDetalle.price = this.priceAmountControl.value,
    //     this.selectFacturaDetalle.pricePartial = (this.quantityControl.value * this.priceAmountControl.value)
    //     this.selectFacturaDetalle.unitCode = this.unitCodeControl.value;
    //     this.selectFactura.lines.push(this.selectFacturaDetalle);
    //   } else {
    //     this.selectFacturaDetalle.quantity = this.quantityControl.value,
    //     this.selectFacturaDetalle.itemDescription = this.descryptionControl.value,
    //     this.selectFacturaDetalle.price = this.priceAmountControl.value,
    //     this.selectFacturaDetalle.pricePartial = (this.quantityControl.value * this.priceAmountControl.value)
    //     this.selectFacturaDetalle.unitCode = this.unitCodeControl.value;
    //     let index = this.IndexOfItem(this.selectFacturaDetalle);
    //     this.selectFactura.lines[index] = this.selectFacturaDetalle;
    //   }
    //   this.calcularTotales();
    //   this.hideChildModal();
    //   this.clearForm();
    //   //console.log("Campos validados jojoojojojoj: " + JSON.stringify(this.selectFacturaDetalle));
    // }
    //event.preventDefault();
  }



  loadAlerts() {
    this.alertMessageService.getAlerts().forEach(alert => {
      this.alerts.push(alert.data);
    });
    this.alertMessageService.clearAlerts();
  }

  // buildForm() {
  //   this.form1 = this.formBuilder.group({
  //     quantity: ['', [<any>Validators.required, <any>Validators.maxLength(60)]]
  //   });
  // }

  public status: Object = {
    isFirstOpen: true,
    isFirstDisabled: true
  };
  error: any;

  public getDataMoneda() {
    //this.listMoneda = this.facturaService.getMoneda();
  }

  public showChildModal(): void {
    this.selectLines = new LinesModel();
    this.childModal.show();
  }

  public hideChildModal(): void {
    this.childModal.hide();
  }
}
