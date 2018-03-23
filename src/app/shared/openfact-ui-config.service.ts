import { OpenfactUIConfig } from './openfact-ui-config';

export function openfactUIConfigFactory(): OpenfactUIConfig {
  const answer = window['OpenfactUIEnv'] || {};
  // lets filter out any values of 'undefined' in case an env var is missing in the template expression
  for (const key in answer) {
    if (answer[key]) {
      const value = answer[key];
      if (value === 'undefined') {
        answer[key] = '';
      }
    }
  }
  return answer as OpenfactUIConfig;
}

export let openfactUIConfigProvider = {
  provide: OpenfactUIConfig,
  useFactory: openfactUIConfigFactory,
  deps: []
};
