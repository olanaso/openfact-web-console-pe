import { REALM } from './realm.token';

import { ApiLocatorService } from './api-locator.service';

export const realmFactory = (api: ApiLocatorService) => {
  return api.realm;
};

export let realmProvider = {
  provide: REALM,
  useFactory: realmFactory,
  deps: [ApiLocatorService]
};
