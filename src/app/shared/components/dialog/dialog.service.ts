import { Injectable } from '@angular/core';
import { NgbModal, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { DialogComponent } from './dialog.component';

@Injectable()
export class DialogService {

  constructor(private modalService: NgbModal) { }

  confirm(title: string, message: string): NgbModalRef {
    const modalRef = this.modalService.open(DialogComponent);

    modalRef.componentInstance.action = "confirm";

    modalRef.componentInstance.title = title;
    modalRef.componentInstance.message = message;

    return modalRef;
  }

  confirmDelete(name: string, type: string): NgbModalRef {
    const modalRef = this.modalService.open(DialogComponent);

    modalRef.componentInstance.action = "delete";

    modalRef.componentInstance.title = "Delete";
    modalRef.componentInstance.objectType = type;
    modalRef.componentInstance.objectName = name;

    return modalRef;
  }

}
