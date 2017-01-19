import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ofToDate'
})
export class ToDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return new Date(value);
  }

}
