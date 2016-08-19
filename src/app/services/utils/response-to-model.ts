import { Response } from '@angular/http';

import { ObjectBuilder } from './object-builder';

import { Model } from '../models';
import { Restangular } from '../restangular';

export class ResponseToModel {

    public static toModel<T extends Model>(response: Response, restangular: Restangular, builder: ObjectBuilder<T>, requireOne?: boolean, idName?: string): T {
        if (response.status === 201) {
            return undefined;
        } else {
            let json = <T>response.json();
            let model = Object.assign(builder.build(), json);
            model.restangular = restangular;
            if (requireOne) {
                model.restangular = restangular.one('', idName ? model[idName] : model['id']);
            }
            return model;
        }
    }

    public static toModels<T extends Model>(response: Response, restangular: Restangular, builder: ObjectBuilder<T>, requireOne?: boolean, idName?: string): T[] {
        if (response.status === 201) {
            return undefined;
        } else {
            let models = <T[]>response.json();
            for (let i = 0; i < models.length; i++) {
                let model = builder.build();

                if (requireOne) {                    
                    model.restangular = restangular.one('', idName ? model[idName] : model['id']);                     
                }
                models[i] = Object.assign(model, models[i]);
            }
            return models
        }


    }

}
