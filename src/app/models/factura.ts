
import { FacturaDetalle } from './factura-detalle';

export class Factura   {
  private _idFactura: number;
  public get idFactura(): number {
    return this._idFactura;
  }

  public set idFactura(v: number) {
    this._idFactura = v;
  }

  private _serie: string;
  public get serie(): string {
    return this._serie;
  }
  public set serie(v: string) {
    this._serie = v;
  }

  private _numero: string;
  public get numero(): string {
    return this._numero;
  }
  public set numero(v: string) {
    this._numero = v;
  }

  private _ruc: string;
  public get ruc(): string {
    return this._ruc;
  }
  public set ruc(v: string) {
    this._ruc = v;
  }
  private _fechaEmision: string;
  public get fechaEmision(): string {
    return this._fechaEmision;
  }
  public set fechaEmiision(v: string) {
    this._fechaEmision = v
  }

  private _razonSocial: string;
  public get razonSocial(): string {
    return this._razonSocial;
  }
  public set razonSocial(v: string) {
    this._razonSocial = v;
  }

  private _moneda: string;
  public get moneda(): string {
    return this._moneda;
  }
  public set moneda(v: string) {
    this._moneda = v;
  }

  private _email: string;
  public get email(): string {
    return this._email;
  }
  public set email(v: string) {
    this._email = v;
  }

  private _afecto: string;
  public get afecto(): string {
    return this._afecto;
  }
  public set afecto(v: string) {
    this._afecto = v;
  }

  private _facturaDetalle: FacturaDetalle[];
  public get facturaDetalle(): FacturaDetalle[] {
    return this._facturaDetalle;
  }
  public set facturaDetalle(v: FacturaDetalle[]) {
    this._facturaDetalle = v;
  }
}