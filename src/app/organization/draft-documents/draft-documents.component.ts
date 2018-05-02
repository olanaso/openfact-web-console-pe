import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { PEUBLDocumentService } from './../../ngx-openfact/pe-sunat/pe-ubl-document.service';
import { Component, OnInit } from '@angular/core';
import { Contexts, Organization, Invoice } from './../../ngx-openfact';

@Component({
  selector: 'of-draft-documents',
  templateUrl: './draft-documents.component.html',
  styleUrls: ['./draft-documents.component.scss']
})
export class DraftDocumentsComponent implements OnInit {

  organization: Organization;

  facturas: Invoice[] = [];
  boletas: Invoice[] = [];

  offset: number = 0;
  limit: number = 10;

  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private documentService: PEUBLDocumentService,
    private contexts: Contexts,
  ) {
    this.subscriptions.push(
      contexts.current.subscribe((val) => {
        this.organization = val.organization;
        this.loadFacturas();
      })
    );
  }

  ngOnInit() {

  }

  loadFacturas() {
    this.documentService.getInvoices(this.organization.id, 'abierto', this.offset, this.limit).subscribe((val) => {
      this.facturas = val;
    });
  }

  loadBoletas() {
    // this.documentService.getBoletas(this.organization.id, 'abierto', this.offset, this.limit).subscribe((val) => {
    //   this.boletas = val;
    // });
  }

  editarBoleta(invoice: Invoice) {
    this.router.navigate(['_organization', this.organization.id, '_documents', '_invoice', invoice.id]);
  }

}
