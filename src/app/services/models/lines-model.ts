import { Model } from './model'
import { Restangular } from '../restangular';

export class LinesModel {
    
    public id: number;
    public orderNumber: number;
    public itemDescription: string;
    public quantity: number;
    public price: number;
    public pricePartial: number;
    public unitCode: string;
    public ammount: number;
    public itemIdentification: string;
    public igv: number;
    public isc: number;
    public othertexs: number;
    public allowanceCharge: number;

}