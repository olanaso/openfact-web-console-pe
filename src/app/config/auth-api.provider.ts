import { AUTH_API_URL } from './auth-api';

import { ApiLocatorService } from './api-locator.service';

export const authApiUrlFactory = (api: ApiLocatorService) => {
  return api.ssoApiUrl;
};

export let authApiUrlProvider = {
  provide: AUTH_API_URL,
  useFactory: authApiUrlFactory,
  deps: [ApiLocatorService]
};
