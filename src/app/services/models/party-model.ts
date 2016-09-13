import { AddressModel } from './address-model';
import { ContactModel } from './contact-model';

export class PartyModel {
    address: AddressModel = new AddressModel();
    partyName: String; //nombre del emisor
    registrationName: String;//razon social
    email: String;//email del parte
    contac: ContactModel = new ContactModel();//datos del parte como telefono y otros similares
}