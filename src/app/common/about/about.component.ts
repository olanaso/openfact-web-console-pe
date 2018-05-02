import { ActivatedRoute, Router } from '@angular/router';
import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

import { ModalDirective } from 'ngx-bootstrap';

@Component({
  selector: 'of-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, AfterViewInit {

  @ViewChild('aboutModal')
  aboutModal: ModalDirective;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.aboutModal.show();
  }

  close() {
    const url = this.router.createUrlTree(['./', { outlets: { popup: null } }]);
    this.router.navigateByUrl(url, { relativeTo: this.route });
  }

}
