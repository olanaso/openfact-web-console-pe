import { OpaqueToken } from '@angular/core';

export let APP_CONFIG = new OpaqueToken('app.config');

export interface RestConfig {
    url: string;
}

export const OPENFACT_CONFIG: RestConfig = {
    url: 'http://localhost:8080/admin'
};

export const SUNAT_CONFIG: RestConfig = {
    url: 'http://localhost:8080/admin'
};