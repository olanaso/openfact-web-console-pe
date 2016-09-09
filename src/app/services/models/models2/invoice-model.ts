

export class InvoiceModel {
    issueDate: Date;//fecha emision de la factura
    issueTime: Date;// fecha 
    dueDate: Date;//fecha de vencimiento
    signature: SignatureModel = new SignatureModel();//firma digital
    accountingSupplierParty: SupplierPartyModel = new SupplierPartyModel();//datos del emisor 
    invoiceTypeCode: CodeTypeModel = new CodeTypeModel();//tipo de documento 
    id: String; // numero y serie de documento
    accountingCustomerParty: CustomerPartyModel = new CustomerPartyModel();//datos del cliente 
    invoiceLine: InvoiceLineModel = new InvoiceLineModel();//detalle de documento
    taxTotal: Array<TaxTotal> = [];
    legalMonetaryTotal: LegalMonetaryTotal = new LegalMonetaryTotal();
    documentoCurrencyCode: CodeTypeModel = new CodeTypeModel();
    //  id: string; // id del documento
    //   type: string;//tipo de documente -- BOLETA o FACTURA   
    //   totalDiscounted: number;//total descuento
    //   //totalUnaffected: number;//total inafecto
    //   //totalExonerated: number;//total exonerado
    //   payableAmount: number;//IMPORTE TOTAL
    //   invoiceNumber: number;//NUMERO DE FACTURA
    //   invoiceSet: number;// SERIE DE LA FACTURA
    //   currencyCode: string;//MONEDA -- PEN USD
}


export class SignatureModel {
    signatureValue: String; //firma
    certificade: String;//certificado
}
export class SupplierPartyModel {
    aditionalAccountId: CodeTypeModel = new CodeTypeModel();// id y vlue
    customerAssignedAccountID: String; // nro de doucento
    party: PartyModel = new PartyModel();//party 
}
export class CustomerPartyModel {
    aditionalAccountId: CodeTypeModel = new CodeTypeModel();// id y vlue
    customerAssignedAccountID: String; // nro de doucento
    party: PartyModel = new PartyModel();//party 
}
export class PartyModel {
    address: AddressModel = new AddressModel();
    partyName: String; //nombre del emisor
    registrationName: String;//razon social
    email: String;//email del parte
    contac: ContactModel = new ContactModel();//datos del parte como telefono y otros similares
}
export class AddressModel {
    id: string;
    streetName: String;
    citySubdivisionName: String;
    cityName: String;
    countrySubentity: String;
    district: String;
    identificationCode: String;//ejem PE codifo de pais?
}
export class ContactModel {
    electronicMail: String;
    telefax: String;
    telephone: String;
    name: String;
}
export class InvoiceLineModel {
    invoiceQuantityModel: InvoiceQuantityModel = new InvoiceQuantityModel();
    itemModel: ItemModel = new ItemModel();//denominacion del item
    priceModel: PriceModel = new PriceModel();
    alternativePriceModel: AlternativePriceModel = new AlternativePriceModel();
    taxTotal: Array<TaxTotal> = [];
    lineExtensionAmount: number; // valor de venta por item sin deducir impuestos
    id: String;
}

export class CodeTypeModel {
    code: String;
    name: String;
}
export class InvoiceQuantityModel {
    value: number;//cantidad 
    unitCode: String;//unidad de medida
}
export class PriceModel {
    priceAmount: number;//precio
    priceTypeCode: String;//codigo 

}
export class AlternativePriceModel {
    alternativeConditionPrice: Array<PriceModel> = [];;
}

export class TaxTotal {
    taxAmount: number;
    taxSubTotal: Array<TaxSubTotal> = [];
}
export class TaxSubTotal {
    taxAmount: number;
    taxCategory: TaxCategory = new TaxCategory();
}
export class TaxCategory {
    taxExemptionReasonCode: CodeTypeModel = new CodeTypeModel();
    taxScheme: TaxScheme = new TaxScheme();
    tierRange: String;

}
export class TaxScheme {
    id: String;
    name: String;
    taxTypeCode: String;
}
export class LegalMonetaryTotal {
    chargeTotalAmount: number;
    payableTotalAmount: number;

}

export class ItemModel {
    description: String;
    sellerItemIdentification:String;
}






// export class CustomerPartyModel {

// }
