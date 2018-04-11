import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AboutModalConfig } from 'patternfly-ng/modal';

@Component({
  selector: 'of-about-modal',
  templateUrl: './about-modal.component.html',
  styleUrls: ['./about-modal.component.scss']
})
export class AboutModalComponent implements OnInit {

  aboutConfig: AboutModalConfig;
  modalRef: BsModalRef;

  @ViewChild('aboutTemplate') aboutTemplate: any;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.aboutConfig = {
      additionalInfo: 'Openfact is a software registered on Goverment, for more information contact us.',
      copyright: 'Trademark and Copyright Information',
      logoImageAlt: 'Patternfly Symbol',
      logoImageSrc: '//www.patternfly.org/assets/img/logo-alt.svg',
      title: 'Openfact',
      productInfo: [
        {
          name: 'Version',
          value: 3
        }
      ]
    } as AboutModalConfig;
  }

  open() {
    this.modalRef = this.modalService.show(this.aboutTemplate);
  }

  closeModal($event: any): void {
    this.modalRef.hide();
  }

}
