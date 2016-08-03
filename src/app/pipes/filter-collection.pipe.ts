/// <reference path="../../../typings/globals/underscore/index.d.ts" />
declare var _;

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCollection'
})
export class FilterCollectionPipe implements PipeTransform {

  transform(collection: Array<any>, predicate?: any): any {
    if (!collection || !predicate) {
      return collection;
    }
    return _.filter(collection, predicate);
  }

}
