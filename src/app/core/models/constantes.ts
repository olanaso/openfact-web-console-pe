

export const gravado = "GRAVADO";
export const exonerado = "EXONERADO";
export const inafecto = "INAFECTO";



export const tipoDocumento = [
  {abreviatura: "BOLETA", denominacion: "BOLETA ELECTRONICA", afectaIgv: false, grupo: "", valor: "01"},
  {abreviatura: "FACTURA", denominacion: "FACTURA ELECTRONICA", afectaIgv: false, grupo: "", valor: "02"}
];

export const tipoDocumentoEntidad = [
  {abreviatura: "DNI", denominacion: "DOC.NACIONAL DE IDENTIDAD", afectaIgv: false, grupo: "", valor: "1"},
  {abreviatura: "RUC", denominacion: "REGISTRO UNICO DE CONTRIBUYENTE", afectaIgv: false, grupo: "", valor: "6"},
  {
    abreviatura: "VARIOS",
    denominacion: "VARIOS-VENTAS MENORES A S/.700.00 Y OTROS",
    afectaIgv: false,
    grupo: "",
    valor: "-"
  },
  {abreviatura: "C.EXTRANJERIA", denominacion: "CARNET DE EXTRANJERIA", afectaIgv: false, grupo: "", valor: "4"},
  {abreviatura: "PASS.", denominacion: "PASAPORT", afectaIgv: false, grupo: "", valor: "7"},
  {
    abreviatura: "CED.DIPLOMATICA",
    denominacion: "CEDULA DIPLOMATICA DE IDENTIDAD",
    afectaIgv: false,
    grupo: "",
    valor: "A"
  },
  {
    abreviatura: "NO DOMICILIADO",
    denominacion: "NO DOMICILIADO, SIN RUC(EXPORTACION)",
    afectaIgv: false,
    grupo: "",
    valor: "0"
  }
];

export const monedas = [
  {abreviatura: "Soles", denominacion: "Nuevos Soles", afectaIgv: false, grupo: "", valor: "PEN"}, // el primero sera usado por defecto
  {abreviatura: "Dolares", denominacion: "Dolares Americanos", afectaIgv: false, grupo: "", valor: "USD"}
];

export const tipoDeIgv= [
  {abreviatura: "", denominacion: "Gravado - Operación Onerosa", afectaIgv: true, grupo: gravado, valor: "1"},
  {abreviatura: "", denominacion: "Gravado - Retiro por premio", afectaIgv: true, grupo: gravado, valor: "2"},
  {abreviatura: "", denominacion: "Gravado - Retiro por donación", afectaIgv: true, grupo: gravado, valor: "3"},
  {abreviatura: "", denominacion: "Gravado - Retiro", afectaIgv: true, grupo: gravado, valor: "4"},
  {abreviatura: "", denominacion: "Gravado - Retiro por publicidad", afectaIgv: true, grupo: gravado, valor: "5"},
  {abreviatura: "", denominacion: "Gravado - Bonificaciones", afectaIgv: true, grupo: gravado, valor: "6"},
  {
    abreviatura: "",
    denominacion: "Gravado – Retiro por entrega a trabajadores",
    afectaIgv: true,
    grupo: gravado,
    valor: "7"
  },
  {abreviatura: "", denominacion: "Exonerado - Operación Onerosa", afectaIgv: false, grupo: exonerado, valor: "8"},
  {abreviatura: "", denominacion: "Inafecto - Operación Onerosa", afectaIgv: false, grupo: inafecto, valor: "9"},
  {abreviatura: "", denominacion: "Inafecto - Retiro por Bonificación", afectaIgv: false, grupo: inafecto, valor: "10"},
  {abreviatura: "", denominacion: "Inafecto - Retiro", afectaIgv: false, grupo: inafecto, valor: "11"},
  {
    abreviatura: "",
    denominacion: "Inafecto - Retiro por Muestras Médicas",
    afectaIgv: false,
    grupo: inafecto,
    valor: "12"
  },
  {
    abreviatura: "",
    denominacion: "Inafecto - Retiro por Convenio Colectivo",
    afectaIgv: false,
    grupo: inafecto,
    valor: "13"
  },
  {abreviatura: "", denominacion: "Inafecto - Retiro por premio", afectaIgv: false, grupo: inafecto, valor: "14"},
  {abreviatura: "", denominacion: "Inafecto - Retiro por publicidad", afectaIgv: false, grupo: inafecto, valor: "15"},
  {abreviatura: "", denominacion: "Exportacion", afectaIgv: false, grupo: inafecto, valor: "16"}
];


