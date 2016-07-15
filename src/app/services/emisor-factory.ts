import { EmisorService  } from './emisor.service';

export class EmisorFactory {

    createEmisor() {
        let emisor2 = new EmisorService();
        emisor2.ruc1 = '110110101';
        emisor2.urlEmisor='';
        return emisor2;
    }
    searchEmisores(){

        return true;
    }


}
