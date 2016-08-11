import {Injectable} from '@angular/core';
import {Alert} from './alert';

import { OrganizationModel } from '../../services';

// interface AlertMap {
//   name: string;
//   data: Alert;
// };

@Injectable()
export class HeaderService {
    private organization: OrganizationModel;
    constructor() {
        //this.organization = {};
    }

    setOrganization(organization: OrganizationModel) {
        this.organization = organization;
    }
    // addShortAlert(type: string, message: string) {
    //     this.alerts.push({
    //         name: '',
    //         data: {
    //             type: type,
    //             message: message
    //         }
    //     });
    // }
    getOrganization() {
        return this.organization;
    }
    // clearAlerts() {
    //     this.alerts = [];
    // }
}
