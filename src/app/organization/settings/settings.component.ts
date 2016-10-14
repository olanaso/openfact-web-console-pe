import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.parent.data['organization']);
  }

  ngOnInit() {
  }

}
