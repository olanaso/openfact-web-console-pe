

export class FacturaDetalle {
  
  private _cantidad : number;
  public get cantidad() : number {
    return this._cantidad;
  }
  public set cantidad(v : number) {
    this._cantidad = v;
  }
  
  public unidadMedida: string;
  public producto:string;
  public precioUnitario:number;
  public precioParcial:number;
}