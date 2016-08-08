/**
 * InvoiceDetails
 */
import { Model } from './model';
import { RestangularOpenfactService } from '../providers/restangular-openfact.service';
import { RestangularService } from '../providers/restangular.service';

export class LinesModel  {
    public id:number;
    public orderNumber:number;
    public itemDescription:string;
    public quantity:number;
    public price:number;
    public pricePartial:number;
    public unitCode:string;
    public ammount:number;
    public itemIdentification:string;
    public igv:number;
    public isc:number;
    public othertexs:number;
    public allowanceCharge:number;
     /*Constructor*/
    // constructor(restangularOpenfactService: RestangularOpenfactService) {
    //     super(restangularOpenfactService);
    // }
}