import { RestangularService } from '../services/rest/restangular.service';

export class Model {

    private restangular: RestangularService;

    constructor() {}

    setRestangular(restangular: RestangularService) {
        this.restangular = restangular;
    }
    
}
