import { Restangular } from '../services';

export abstract class Model {

  restangular: Restangular;

  constructor() { }

  save() {
    return this.restangular.put(this);
  }

}
