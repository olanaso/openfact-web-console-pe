import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CORE_DIRECTIVES,ControlGroup} from '@angular/common';
import { ProjectHeaderComponent } from '../../../../directives/project-header';
import { ProjectPageComponent } from '../../../../directives/project-page';
import { MODAL_DIRECTIVES, ModalDirective, BS_VIEW_PROVIDERS} from 'ng2-bootstrap/ng2-bootstrap';
/**models */
import { InvoiceModel } from '../../../../../app/models/invoice-model';
import { LinesModel } from '../../../../../app/models/lines-model';
import { CustomerModel } from '../../../../../app/models/customer-model';
// import { Moneda } from '../../../../../app/models/moneda';
/**service */
import { InvoiceService } from '../../../../../app/services/invoice.service';
import { CustomerService } from '../../../../../app/services/customer.service';

@Component({
  moduleId: module.id,
  selector: 'app-create-invoice',
  templateUrl: 'create-invoice.component.html',
  styleUrls: ['create-invoice.component.css'],
  directives: [MODAL_DIRECTIVES, CORE_DIRECTIVES, ProjectHeaderComponent, ProjectPageComponent],
  viewProviders: [BS_VIEW_PROVIDERS],
  providers: [InvoiceService, CustomerService]
})
export class CreateInvoiceComponent implements OnInit {
  @ViewChild('childModal') public childModal: ModalDirective;
  selectInvoice: InvoiceModel;
  selectLines: LinesModel;
    loginForm: ControlGroup;

  constructor(invoiceService: InvoiceService, customerService: CustomerService) {
    this.selectInvoice = invoiceService.build();;
    this.selectInvoice.lines = new Array<LinesModel>();
    this.selectInvoice.customer = customerService.build();
    console.log(JSON.stringify(this.selectInvoice));
  }

  ngOnInit() {
  }

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
