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
  enviarSunat: boolean;
  enviarCliente: boolean;
  detalle: InvoiceLine[];
}

export interface InvoiceLine {
  unidadMedida: string;
  descripcion: string;
  tipoIGV: string;
  cantidad: number;
  valorUnitario: number;
  precioUnitario: number;
  subtotal: number;
  total: number;
  totalIGV: number;
  totalISC: number;
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
  igv: number;
  isc?: number;
}

export interface TotalInformacionAdicional {
  totalGravado: number;
  totalGratuito: number;
  totalInafecto: number;
  totalExonerado: number;
}
