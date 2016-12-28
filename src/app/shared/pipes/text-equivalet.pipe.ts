import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textEquivalet'
})
export class TextEquivaletPipe implements PipeTransform {

  transform(value: any, args?: any[]): any {
    if (args) {
      for(let i = 0; i < args.length; i++) {    
        if(value === args[i].key) {
          return args[i].value;
        }
      }      
    }
    return value;
  }

}
