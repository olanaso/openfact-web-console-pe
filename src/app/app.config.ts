import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface RestConfig {
    url: string;
}

export const OPENFACT_CONFIG: RestConfig = {
    url: 'http://192.168.1.41:8081/admin'
};

export const SUNAT_CONFIG: RestConfig = {
    url: 'http://192.168.1.41:8081/admin'
};