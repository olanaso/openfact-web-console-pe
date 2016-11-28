import { OpaqueToken } from "@angular/core";
import { Restangular } from "ng2-restangular";

export const OPENFACT = new OpaqueToken('OPENFACT');
export function RestangularOpenfactFactory(restangular: Restangular) {
  return restangular.withConfig((RestangularConfigurer) => {
    RestangularConfigurer.setBaseUrl('http://localhost:8081/openfact');
  });
}