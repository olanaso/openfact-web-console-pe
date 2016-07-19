import {Model} from './model';

export class FacturaDetalle{ //extends Model {

 public idFacturaDetalle: number;
 public  cantidad: number;
  public unidadMedida: string;
  public producto: string;
 public  precioUnitario: number;
 public  precioParcial: number;

  //attributeNames: string[] = ['idFacturaDetalle', 'cantidad', 'unidadMedida', 'producto', 'precioUnitario','precioParcial'];

  // constructor(attributes: {} = null) {
  //   this.attributes = attributes;
  // }

  // set attributes(attributes: {}) {
  //   for (var k in attributes) {
  //     this[k] = attributes[k];
  //   }
  // }

  // get attributes(): {} {
  //   return {
  //     idFacturaDetalle : this.idFacturaDetalle,
  //     cantidad : this.cantidad,
  //     unidadMedida: this.unidadMedida,
  //     producto:this.producto,
  //     precioUnitario:this.precioUnitario,
  //     precioParcial:this.precioParcial
  //   };
  // }
}