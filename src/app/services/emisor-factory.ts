import { EmisorService  } from './emisor.service';

export class EmisorFactory {

    createEmisor() {
        let emisor = new EmisorService();
        emisor.ruc1 = '110110101';
        emisor.urlEmisor='';
        return emisor;
    }
    searchEmisores(){

        return true;
    }


}
