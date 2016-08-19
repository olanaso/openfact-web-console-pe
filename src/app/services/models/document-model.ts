import {Model} from './model'
import {Restangular} from '../restangular';
import {Buildable, ObjectBuilder, ResponseToModel} from '../utils';

export const ADDITIONAL_IDENTIFICATION_ID = 'ADDITIONAL_IDENTIFICATION_ID';

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
