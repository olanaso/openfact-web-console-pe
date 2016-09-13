import { PartyModel } from './party-model';
import { CodeTypeModel } from './code-type-model';

export class SupplierPartyModel {
    aditionalAccountId: CodeTypeModel = new CodeTypeModel();// id y vlue
    customerAssignedAccountID: String; // nro de doucento
    party: PartyModel = new PartyModel();//party 
}