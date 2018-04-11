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

  company: Organization;

  facturas: Invoice[] = [];
  facturasColumns: any[] = [];

  boletas: Invoice[] = [];
  boletasColumns: any[] = [];

  offset: number = 0;
  limit: number = 10;

  private subscriptions: Subscription[] = [];

  constructor(
    private documentService: PEUBLDocumentService,
    private contexts: Contexts,
  ) {
    this.subscriptions.push(
      contexts.current.subscribe((val) => {
        this.company = val.company;
        this.loadFacturas();
      })
    );
  }

  ngOnInit() {
    this.facturasColumns = [{
      prop: 'serie',
      name: 'Serie',
      resizeable: true
    }, {
      prop: 'numero',
      name: 'Numero',
      resizeable: true
    }, {
      prop: 'cliente.nombre',
      name: 'Cliente',
      resizeable: true
    }, {
      prop: 'moneda.codigo',
      name: 'Moneda',
      resizeable: true
    }];

    this.boletasColumns = [{

      prop: 'name',
      name: 'Name',
      resizeable: true
    }, {

      prop: 'address',
      name: 'Address',
      resizeable: true
    }, {

      prop: 'birthMonth',
      name: 'Birth Month',
      resizeable: true
    }, {

      prop: 'weekDay',
      name: 'Week Day',
      resizeable: true
    }];
  }

  loadFacturas() {
    this.documentService.getFacturas(this.company.id, 'NO_REGISTRADO', this.offset, this.limit).subscribe((val) => {
      this.facturas = val;
    });
  }

  loadBoletas() {
    this.documentService.getBoletas(this.company.id, 'NO_REGISTRADO', this.offset, this.limit).subscribe((val) => {
      this.facturas = val;
    });
  }

}
