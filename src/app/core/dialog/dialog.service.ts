import { NgbActiveModal, NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { DialogComponent } from './dialog.component';
import { Injectable } from '@angular/core';
import { DialogPreviewComponent } from '../dialog-preview/dialog-preview.component';
import { DialogXmlComponent } from './../dialog-xml/dialog-xml.component';

@Injectable()
export class DialogService {

  constructor(private modalService: NgbModal) { }

  confirm(title: string, message: string): NgbModalRef {
    const modalRef = this.modalService.open(DialogComponent);

    modalRef.componentInstance.action = 'confirm';

    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;

    return modalRef;
  }

  confirmDelete(name: string, type: string): NgbModalRef {
    const modalRef = this.modalService.open(DialogComponent);

    modalRef.componentInstance.action = 'delete';

    modalRef.componentInstance.title = 'Delete';
    modalRef.componentInstance.objectType = type;
    modalRef.componentInstance.objectName = name;

    return modalRef;
  }

  preview(title: string, file: any): NgbModalRef {
    const modalRef = this.modalService.open(DialogPreviewComponent, { size: 'lg', backdrop: 'static'  });

    modalRef.componentInstance.title = title;
    modalRef.componentInstance.pdfSrc = file;
    return modalRef;
  }
  xmlpreview(title: string, file: any): NgbModalRef {
    const modalRef = this.modalService.open(DialogXmlComponent, { size: 'lg', backdrop: 'static' });

    modalRef.componentInstance.title = title;
    modalRef.componentInstance.xml = file;
    return modalRef;
  }
}
