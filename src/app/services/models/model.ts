import {Restangular} from '../restangular';

export interface Model {
  restangular: Restangular;

  clone(): Model;
}
