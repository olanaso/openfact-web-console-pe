import { EmisorService  } from './emisor.service';
import { EMISOR } from './emisor-mock';

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

}
