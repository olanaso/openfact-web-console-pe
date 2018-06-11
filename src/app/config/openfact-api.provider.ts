import { OPENFACT_API_URL } from './openfact-api';
import { ApiLocatorService } from './api-locator.service';

export function openfactApiUrlFactory(api: ApiLocatorService) {
  return api.openfactApiUrl;
}

export let openfactApiUrlProvider = {
  provide: OPENFACT_API_URL,
  useFactory: openfactApiUrlFactory,
  deps: [ApiLocatorService]
};
