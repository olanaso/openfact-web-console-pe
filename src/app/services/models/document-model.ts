import {Model} from './model'
import {Restangular} from '../restangular';
import {Buildable, ObjectBuilder, ResponseToModel} from '../utils';

export const INVOICE_TYPE = 'INVOICE_TYPE';
export const ADDITIONAL_IDENTIFICATION_ID = 'ADDITIONAL_IDENTIFICATION_ID';
export const ADDITIONAL_INFORMATION = 'ADDITIONAL_INFORMATION';//gravadas, inafectas, exonaradas y gratuitas.
export const TOTAL_TAX = 'TOTAL_TAX';
export const TAX_REASON = 'TAX_REASON';

export class DocumentModel extends Model implements Buildable {

    id: string;
    name: string;
    description: string;
    code: string;
    value: number;

    constructor(restangular?: Restangular) {
        super();
        this.restangular = restangular;
    }

}
