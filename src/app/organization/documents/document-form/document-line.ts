import { TipoIGV } from './tipos-igv';

export interface DocumentLine {
  unidadMedida: string;
  descripcion: string;
  cantidad: number;
  tipoIGV: TipoIGV;
  valorUnitario: number;
  precioUnitario: number;
  subtotal: number;
  total: number;
  totalIGV: number;
}
