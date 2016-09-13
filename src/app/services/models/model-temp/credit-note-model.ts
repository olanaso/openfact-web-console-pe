export class CreditNoteModel {

    id: string; //id de la nota de credito
    idOrganization: string;
    issueDate: Date;// fecha de emision de nota de credito
    customer: CustomerModel = new CustomerModel();//CLIENTE
    additionalInformation: Array<AdditionalInformationModel> = [];
    referenceID: string;//tipo doc nota de credito 
    responseCode: string// codigo de tipo de nota de credtio
    description: string//del motivo o sustento de la nota de credito
    payableAmount: number;//IMPORTE TOTAL
    allowanceCharge: number;
    ammountExtension: number;
    lines: Array<LineModel> = [];



}

export class CustomerModel {
    id: string
    customerAssignedAccountId: string;//ruc o dni u otro numero de documento
  assignedIdentificationId: string // NUMERO DE DOCUMENTO.
    additionalAccountId: string //TIPO DE DOCUMENTO -- RUC O DNI
    additionalIdentificationId: string;
    registrationName: string // RAZON SOCIAL DE LA EMPRESA
    registrationNameLegal: string
    //email: string;//CORREO ELECTRONICO DEL CLIENTE

    constructor() { }
}



export class AdditionalInformationModel {
    name: string;
    //amount: number;
    constructor() { }
}
export class LineModel {

    id: number;// invoiceDocumentoReference
    documentoTypeCode: string;//codigo del documento
    issueDate: Date;// fecha de emision de nota de credito
    orderNumber: number;
    sellersItemIdentification: string;//codigoItem;
    documentTypeCode: string;
    creditQuantity: number = 0;
    priceAmount: number = 0; // precio de venta por item
    price: number = 0;// valor unitario por item k modifica
    LineExtensionAmount: number = 0; //total operaciones grabadas
    amount: number = 0;
    itemDescription: string;//descripcopn detallada del bien vendido o cedido en uso
    itemIdentification: string;//
    totalTaxs: Array<TotalTaxModel> = [];
    descriptionItem: string
    // constructor(restangular?: Restangular) {
    //     super();
    //     this.restangular = restangular;
    // }

    // allowanceCharge: number;
    // ammountExtension: number;


}
export class TotalTaxModel {
    document: string;
    reasonCode: string;
    taxAmount: number;
    typeCodeTax: string;
    checked: boolean;
    constructor() { }
}
