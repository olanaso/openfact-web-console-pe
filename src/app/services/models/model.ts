import {Restangular} from '../restangular/restangular';

export interface Model {
  restangular: Restangular;

  clone(): Model;
}
