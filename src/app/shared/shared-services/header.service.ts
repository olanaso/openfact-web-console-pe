import {Injectable} from '@angular/core';

import { OrganizationModel } from '../../services';

@Injectable()
export class HeaderService {
    private organization: OrganizationModel;
    private beforeOrganizacion: OrganizationModel;
    constructor() {
        //console.log("Creando el servicio hreaderService");        
    }

    setOrganization(organization: OrganizationModel) {

        this.organization = organization;
        this.beforeOrganizacion = this.organization;//.clone();
        //console.log("cargando el objeto en el servicio");        
    }

    getOrganization() {
        return this.organization;
    }

    getBeforeOrganization() {
        return this.beforeOrganizacion;
    }

}
