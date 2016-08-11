import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'yesNo'
})
export class YesNoPipe implements PipeTransform {
  transform(value: string, si_no: string): string {
    let valorReturn = "";
    if (value === "true")
      return si_no === "si" ? valorReturn = "si" : (si_no === "activo" ? valorReturn = "activo" : (si_no === "abierto" ? valorReturn = "abierto" : "sin valor"));
    else if (value === "false")
      return si_no === "si" ? valorReturn = "no" : (si_no === "activo" ? valorReturn = "inactivo" : (si_no === "abierto" ? valorReturn = "cerrado" : "sin valor"));
    return valorReturn = "no determinado";
  }

}
