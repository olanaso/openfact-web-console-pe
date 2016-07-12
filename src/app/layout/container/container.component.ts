import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: '[app-container]',
  templateUrl: 'container.component.html',
  styleUrls: ['container.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class ContainerComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
