import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'of-about',
  templateUrl: './about.component.html',
  styleUrls: []
})
export class AboutComponent implements OnInit {

  @ViewChild("aboutModalContent")
  aboutModalContent;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private modalService: NgbModal) { }

  ngOnInit() {
    this.open();
  }

  open() {
    this.modalService.open(this.aboutModalContent).result.then((result) => {

    }, (reason) => {
      let url = this.router.createUrlTree(["./", { outlets: { secondary: null } }]);
      this.router.navigateByUrl(url, { relativeTo: this.route });
    });
  }

}
