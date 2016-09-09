import { Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';
import { TranslateService } from 'ng2-translate/ng2-translate';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {
  words: Array<string> = [];
  numbers: Laguage;
  //let words = new Array();

  loadData() {
    this.words[0] = '';
    this.words[1] = 'One';
    this.words[2] = 'Two';
    this.words[3] = 'Three';
    this.words[4] = 'Four';
    this.words[5] = 'Five';
    this.words[6] = 'Six';
    this.words[7] = 'Seven';
    this.words[8] = 'Eight';
    this.words[9] = 'Nine';
    this.words[10] = 'Ten';
    this.words[11] = 'Eleven';
    this.words[12] = 'Twelve';
    this.words[13] = 'Thirteen';
    this.words[14] = 'Fourteen';
    this.words[15] = 'Fifteen';
    this.words[16] = 'Sixteen';
    this.words[17] = 'Seventeen';
    this.words[18] = 'Eighteen';
    this.words[19] = 'Nineteen';
    this.words[20] = 'Twenty';
    this.words[30] = 'Thirty';
    this.words[40] = 'Forty';
    this.words[50] = 'Fifty';
    this.words[60] = 'Sixty';
    this.words[70] = 'Seventy';
    this.words[80] = 'Eighty';
    this.words[90] = 'Ninety';
    console.log("Current languages: " + this._translate.currentLang);
    this.http.get('../../i18n/' + this._translate.currentLang + '.json')
      //.map(res => res.json())
      .subscribe((data) => {
        this.numbers = <Laguage>data.json();
      });
    if (this.numbers)
      console.log(JSON.stringify(this.numbers.HOME.NUMBERS));
  }

  isCurrentLang(lang: string) {
    return lang === this._translate.currentLang;
  }

  constructor(private http: Http, private _translate: TranslateService) {
    this.loadData();
  }

  transform(amount: any, args?: any[]): any {

    this.loadData();
    return this.NumeroALetras(amount);
  }

  Unidades(num) {
    switch (num) {
      case 1: return this.numbers.HOME.NUMBERS.ONE;
      case 2: return this.numbers.HOME.NUMBERS.TWO;
      case 3: return this.numbers.HOME.NUMBERS.THREE;
      case 4: return this.numbers.HOME.NUMBERS.FOUR;
      case 5: return this.numbers.HOME.NUMBERS.FIVE;
      case 6: return this.numbers.HOME.NUMBERS.SIX;
      case 7: return this.numbers.HOME.NUMBERS.SEVEN;
      case 8: return this.numbers.HOME.NUMBERS.EIGHT;
      case 9: return this.numbers.HOME.NUMBERS.NINE;
    }

    return "";
  }//Unidades()

  Decenas(num) {
    let decena = Math.floor(num / 10);
    let unidad = num - (decena * 10);
    switch (decena) {
      case 1:
        switch (unidad) {
          case 0: return this.numbers.HOME.NUMBERS.TEN;
          case 1: return this.numbers.HOME.NUMBERS.ELEVEN;
          case 2: return this.numbers.HOME.NUMBERS.TWELVE;
          case 3: return this.numbers.HOME.NUMBERS.THIRTEEN;
          case 4: return this.numbers.HOME.NUMBERS.FOURTEEN;
          case 5: return this.numbers.HOME.NUMBERS.FIFTEEN;
          case 6: return this.numbers.HOME.NUMBERS.SIXTEEN;
          case 7: return this.numbers.HOME.NUMBERS.SEVENTEEN;
          case 8: return this.numbers.HOME.NUMBERS.EIGHTEEN;
          case 9: return this.numbers.HOME.NUMBERS.NINETEEN;
          //default: return "DIECI" + this.Unidades(unidad);
        }
      case 2:
        switch (unidad) {
          case 0: return this.numbers.HOME.NUMBERS.TWENTY;
          default: return "VEINTI" + this.Unidades(unidad);
        }
      case 3: return this.DecenasY(this.numbers.HOME.NUMBERS.THIRTY, unidad);
      case 4: return this.DecenasY(this.numbers.HOME.NUMBERS.FORTY, unidad);
      case 5: return this.DecenasY(this.numbers.HOME.NUMBERS.FIFTY, unidad);
      case 6: return this.DecenasY(this.numbers.HOME.NUMBERS.SIXTY, unidad);
      case 7: return this.DecenasY(this.numbers.HOME.NUMBERS.SEVENTY, unidad);
      case 8: return this.DecenasY(this.numbers.HOME.NUMBERS.EIGHTY, unidad);
      case 9: return this.DecenasY(this.numbers.HOME.NUMBERS.NINETY, unidad);
      case 0: return this.Unidades(unidad);
    }
  }//Unidades()

  DecenasY(strSin, numUnidades) {
    if (numUnidades > 0)
      return strSin + " Y " + this.Unidades(numUnidades)
    return strSin;
  }//DecenasY()

  Centenas(num) {
    let centenas = Math.floor(num / 100);
    let decenas = num - (centenas * 100);
    switch (centenas) {
      case 1:
        if (decenas > 0)
          return " CIENTO " + this.Decenas(decenas);
        return "CIEN";
      case 2: return "DOSCIENTOS " + this.Decenas(decenas);
      case 3: return "TRESCIENTOS " + this.Decenas(decenas);
      case 4: return "CUATROCIENTOS " + this.Decenas(decenas);
      case 5: return "QUINIENTOS " + this.Decenas(decenas);
      case 6: return "SEISCIENTOS " + this.Decenas(decenas);
      case 7: return "SETECIENTOS " + this.Decenas(decenas);
      case 8: return "OCHOCIENTOS " + this.Decenas(decenas);
      case 9: return "NOVECIENTOS " + this.Decenas(decenas);
    }
    return this.Decenas(decenas);
  }//Centenas()

  Seccion(num, divisor, strSingular, strPlural) {
    let cientos = Math.floor(num / divisor)
    let resto = num - (cientos * divisor)
    let letras = "";
    if (cientos > 0)
      if (cientos > 1)
        letras = this.Centenas(cientos) + " " + strPlural;
      else
        letras = strSingular;
    if (resto > 0)
      letras += "";
    return letras;
  }//Seccion()

  Miles(num) {
    let divisor = 1000;
    let cientos = Math.floor(num / divisor)
    let resto = num - (cientos * divisor)

    let strMiles = this.Seccion(num, divisor, "MIL", "MIL");
    let strCentenas = this.Centenas(resto);

    if (strMiles == "")
      return strCentenas;

    return strMiles + " " + strCentenas;
  }//Miles()

  Millones(num) {
    let divisor = 1000000;
    let cientos = Math.floor(num / divisor)
    let resto = num - (cientos * divisor)

    let strMillones = this.Seccion(num, divisor, "UN MILLON DE", "MILLONES DE");
    let strMiles = this.Miles(resto);

    if (strMillones == "")
      return strMiles;

    return strMillones + " " + strMiles;
  }//Millones()

  NumeroALetras(num) {
    var data = {
      numero: num,
      enteros: Math.floor(num),
      centavos: (((Math.round(num * 100)) - (Math.floor(num) * 100))),
      letrasCentavos: "",
      letrasMonedaPlural: 'SOLES',//“PESOS”, 'Dólares', 'Bolívares', 'etcs'
      letrasMonedaSingular: 'SOL', //“PESO”, 'Dólar', 'Bolivar', 'etc'

      letrasMonedaCentavoPlural: "CENTIMOS",
      letrasMonedaCentavoSingular: "CENTIMO"
    };

    if (data.centavos > 0) {
      //console.log("Centimos : " + data.centavos);
      data.letrasCentavos = "CON " + (function () {
        if (data.centavos == 1)
          return data.centavos + "/100 ";//+ data.letrasMonedaCentavoSingular;
        else
          return data.centavos + "/100 ";//+ data.letrasMonedaCentavoPlural;
      })();
    };

    if (data.enteros == 0)
      return "CERO " + data.letrasMonedaPlural + " " + data.letrasCentavos;
    if (data.enteros == 1)
      return this.Millones(data.enteros) + " " + data.letrasCentavos + " " + data.letrasMonedaSingular;
    else
      return this.Millones(data.enteros) + " " + data.letrasCentavos + " " + data.letrasMonedaPlural;
  }//NumeroALetras()


}


export class Laguage {
  HOME: Numbers;

}

export class Numbers {
  NUMBERS: Number;
}

export class Number {
  "0": string;
  "ONE": string;
  "TWO": string;
  "THREE": string;
  "FOUR": string;
  "FIVE": string;
  "SIX": string;
  "SEVEN": string;
  "EIGHT": string;
  "NINE": string;
  "TEN": string;
  "ELEVEN": string;
  "TWELVE": string;
  "THIRTEEN": string;
  "FOURTEEN": string;
  "FIFTEEN": string;
  "SIXTEEN": string;
  "SEVENTEEN": string;
  "EIGHTEEN": string;
  "NINETEEN": string;
  "TWENTY": string;
  "THIRTY": string;
  "FORTY": string;
  "FIFTY": string;
  "SIXTY": string;
  "SEVENTY": string;
  "EIGHTY": string;
  "NINETY": string;
}