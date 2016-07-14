import { Injectable } from '@angular/core';

import { Factura } from './facturas';
import { FACTURAS } from './facturas-mock';

@Injectable()
export class FacturaService {
  getFacturas() {
    return Promise.resolve(FACTURAS);
  }
  // See the "Take it slow" appendix
  // getHeroesSlowly() {
  //   return new Promise<Hero[]>(resolve =>
  //     setTimeout(() => resolve(HEROES), 2000) // 2 seconds
  //   );
  // }
}
