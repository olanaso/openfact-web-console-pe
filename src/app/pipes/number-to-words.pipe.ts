import { Pipe, PipeTransform } from '@angular/core';
//import { Http } from '@angular/http';

@Pipe({
  name: 'numberToWords'
})
export class NumberToWordsPipe implements PipeTransform {

  // constructor(private http: Http) {
  // }

  transform(value: any, args?: any): any {
  console.log("hola pipe");
    return null;
  }

  // ngOnInit(): any {
  //   //console.log("hola pipe....");
  //   this.http.get('../../i18n/en.json')
  //     //.map(res => res.json())
  //     .subscribe((data) => {        
  //       alert(data);
  //     });
  // }

}
