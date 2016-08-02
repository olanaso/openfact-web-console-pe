import { RestangularService } from '../services/rest/restangular.service';
import { Model } from './model'

export class OrganizationModel extends Model {
    
    id: string;
    name: string;
    supplierName: string;    
    registrationName: string;
    additionalAccountId: string;
    assignedIdentificationId: string;
    enabled: boolean;    

    constructor() {        
        super();
    }
    
}
