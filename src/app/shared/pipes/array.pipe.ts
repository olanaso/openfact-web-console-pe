import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ofArray'
})
export class ArrayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {
      return [];
    }
    if (value.constructor == Array) {
      return value;
    }
    return [value];
  }

}
