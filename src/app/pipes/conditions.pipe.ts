import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conditions'
})
export class ConditionsPipe implements PipeTransform {
  transform(value: string, si_no: string): string {
    let valorReturn = "";
    if (si_no === "si")
      return value === "a" ? valorReturn = "abierto" : valorReturn = "cerrado";
    else if (si_no === "no")
      return value === "a" ? valorReturn = "cerrado" : valorReturn = "abierto";
    return valorReturn = "NINGUNO";
  }

}
