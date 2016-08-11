import { Injectable} from '@angular/core';
import { OrganizationModel } from './models/organization-model';

@Injectable()
export class HeaderService {
    private organization: OrganizationModel;
    constructor() {
        //console.log("Creando el servicio hreaderService");        
    }
    
    setOrganization(organization: OrganizationModel) {
        this.organization = organization;
        //console.log("cargando el objeto en el servicio");        
    }
   
    getOrganization() {
        return this.organization;
    }

}
