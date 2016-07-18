import { EmisorService  } from './emisor.service';
import { EMISOR } from './emisor-mock';
import { Emisor } from '../models/emisor';

export class EmisorFactory {

    // createEmisor() {
    //     let emisor2 = new EmisorService();
    //     emisor2.ruc1 = '110110101';
    //     emisor2.urlEmisor='';
    //     return emisor2;
    // }
    // searchEmisores(){

    //     return true;
    // }
    getEmisores() {
        //return EMISOR;
        return Promise.resolve(EMISOR);
    }
    // getHeroesSlowly() {
    //     return new Promise<Emisor[]>(resolve =>
    //         setTimeout(() => resolve(EMISOR), 2000) // 2 seconds
    //     )
    // }

}
