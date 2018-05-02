import { TipoIgv } from './tipos-igv';

export interface DocumentLine {
  unidadMedida: string;
  descripcion: string;
  cantidad: number;
  tipoIgv: TipoIgv;
  valorUnitario: number;
  precioUnitario: number;
  subtotal: number;
  total: number;
  totalIGV: number;
}
