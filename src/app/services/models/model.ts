import {Restangular} from '../restangular';

export abstract class Model {

  restangular: Restangular;

  constructor() { }

  save() {
    return this.restangular.put(this);
  }

  copy() {
    let copy = Object.assign({}, this);
    delete copy['restangular'];
    return copy;
  }

}
