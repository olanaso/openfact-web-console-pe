import { Pipe, PipeTransform } from '@angular/core';

import * as _ from 'underscore';

@Pipe({
  name: 'filterCollection'
})
export class FilterCollectionPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value || !args) {
      return value;
    }
    return _.filter(value, args);
  }

}
