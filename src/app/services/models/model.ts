
import { RestangularOpenfactService } from '../providers/restangular-openfact.service';
import { RestangularService } from '../providers/restangular.service';
import { Restable } from './restable';

export abstract class Model {

    /*Restangular reference*/
    restangular: RestangularOpenfactService;

    /*Constructor*/
    constructor(restangularOpenfactService: RestangularOpenfactService) {
        this.restangular = restangularOpenfactService;
    }

    getObjectPath() {
        return this.restangular.getPath();
    }

    /*Save the current object*/
    save() {
        return this.restangular.post(this);
    }

    /*Enable the current object*/
    enable() {
        return this.restangular.all('enable').post(this);
    }

    /*Disable the current object*/
    disable() {
        return this.restangular.all('disable').post(this);
    }

}


export interface Model extends Restable {
    
}
