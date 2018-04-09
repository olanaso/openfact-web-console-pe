export interface Invoice {
  id: string;
  serie: string;
  numero: number;
  fecha: Fecha;
  cliente: Cliente;
  total: Total;
  moneda: Moneda;
  totalImpuestos: TotalImpuestos;
  totalInformacionAdicional: TotalInformacionAdicional;
  enviarSUNAT: boolean;
  enviarCliente: boolean;
}

export interface Fecha {
  emision: Date;
  vencimiento: Date;
}

export interface Cliente {
  tipoDocumento: string;
  numeroDocumento: string;
  nombre: string;
  email: string;
  direccion: string;
}

export interface Total {
  pagar: number;
  otrosCargos: number;
  descuentoGlobal: number;
}

export interface Moneda {
  codigo: string;
  tipoCambio: number;
}

export interface TotalImpuestos {
  IGV: number;
  ISC: number;
}

export interface TotalInformacionAdicional {
  totalGravado: number;
  totalGratuito: number;
  totalInafecto: number;
  totalExonerado: number;
}
