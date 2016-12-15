export const gravado = "GRAVADO";
export const exonerado = "EXONERADO";
export const inafecto = "INAFECTO";

export const tipoDocumento = [
    { denominacion: "BOLETA", valor: "01" },
    { denominacion: "FACTURA", valor: "02" }
];

export const tipoDocumentoEntidad = [
    { abreviatura: "DNI", denominacion: "DOC.NACIONAL DE IDENTIDAD", valor: "1" },
    { abreviatura: "RUC", denominacion: "REGISTRO UNICO DE CONTRIBUYENTE", valor: "6" },
    { abreviatura: "VARIOS", denominacion: "VARIOS-VENTAS MENORES A S/.700.00 Y OTROS", valor: "-" },
    { abreviatura: "C.EXTRANJERIA", denominacion: "CARNET DE EXTRANJERIA", valor: "4" },
    { abreviatura: "PASS.", denominacion: "PASAPORT", valor: "7" },
    { abreviatura: "CED.DIPLOMATICA", denominacion: "CEDULA DIPLOMATICA DE IDENTIDAD", valor: "A" },
    { abreviatura: "NO DOMICILIADO", denominacion: "NO DOMICILIADO, SIN RUC(EXPORTACION)", valor: "0" }
];

export const tipoDeIgv = [
    { denominacion: "Gravado - Operación Onerosa", afectaIgv: true, grupo: gravado, valor: "1" },
    { denominacion: "Gravado - Retiro por premio", afectaIgv: true, grupo: gravado, valor: "2" },
    { denominacion: "Gravado - Retiro por donación", afectaIgv: true, grupo: gravado, valor: "3" },
    { denominacion: "Gravado - Retiro", afectaIgv: true, grupo: gravado, valor: "4" },
    { denominacion: "Gravado - Retiro por publicidad", afectaIgv: true, grupo: gravado, valor: "5" },
    { denominacion: "Gravado - Bonificaciones", afectaIgv: true, grupo: gravado, valor: "6" },
    { denominacion: "Gravado – Retiro por entrega a trabajadores", afectaIgv: true, grupo: gravado, valor: "7" },
    { denominacion: "Exonerado - Operación Onerosa", afectaIgv: false, grupo: exonerado, valor: "8" },
    { denominacion: "Inafecto - Operación Onerosa", afectaIgv: false, grupo: inafecto, valor: "9" },
    { denominacion: "Inafecto - Retiro por Bonificación", afectaIgv: false, grupo: inafecto, valor: "10" },
    { denominacion: "Inafecto - Retiro", afectaIgv: false, grupo: inafecto, valor: "11" },
    { denominacion: "Inafecto - Retiro por Muestras Médicas", afectaIgv: false, grupo: inafecto, valor: "12" },
    { denominacion: "Inafecto - Retiro por Convenio Colectivo", afectaIgv: false, grupo: inafecto, valor: "13" },
    { denominacion: "Inafecto - Retiro por premio", afectaIgv: false, grupo: inafecto, valor: "14" },
    { denominacion: "Inafecto - Retiro por publicidad", afectaIgv: false, grupo: inafecto, valor: "15" },
    { denominacion: "Exportacion", afectaIgv: false, grupo: inafecto, valor: "16" }
];

export const monedas = [
    { denominacion: "Nuevos Soles", valor: "PEN" }, // el primero sera usado por defecto
    { denominacion: "Dolares Americanos", valor: "USD" }
];