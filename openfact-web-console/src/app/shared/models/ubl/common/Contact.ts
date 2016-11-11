import { Communication } from './Communication';

export class Contact {
    idUbl: String;
    name: String;
    telephone: String;
    telefax: String;
    electronicMail: String;
    note: String;
    otherCommunication: Array<Communication>;
    id: String;
}