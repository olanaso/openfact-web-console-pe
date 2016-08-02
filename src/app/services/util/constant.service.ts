import { Injectable } from '@angular/core';

@Injectable()
export class ConstantService {

  CONSTANTS: any;
  VERSION: any;

  constructor() { 
    this.CONSTANTS = {
      openshift: 'dev-mode',
      kubernetes: 'dev-mode'
    }
    this.VERSION = {
      openshift: 'dev-mode',
      kubernetes: 'dev-mode'
    }
  }

}
