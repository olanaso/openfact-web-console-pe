import {OpaqueToken} from "@angular/core";

export let APP_CONFIG = new OpaqueToken("app.config");

export interface AppConfig {
    loggingURL: string;
    api: {
        openfact: {
            host: string;
            prefix: string;
        },
        sunat: {
            host: string;
            prefix: string;
        }
    }
    auth: {
        oauth_authorize_uri: string;
        oauth_redirect_base: string;
        oauth_client_id: string;
        logout_uri: string;
    }
}

export interface AppVersion {
    openfact: string
}

export const DEFAULT_CONFIG: AppConfig = {
    loggingURL: "",
    api: {
        openfact: {
            host: "http://192.168.1.111:8080",
            prefix: "/admin"
        },
        sunat: {
            host: "http://sunat.com",
            prefix: "/rest"
        }
    },
    auth: {
        oauth_authorize_uri: "https://localhost:8443/oauth/authorize",
        oauth_redirect_base: "https://localhost:9000",
        oauth_client_id: "openfact-web-console",
        logout_uri: ""
    }
}

export const OPENFACT_VERSION: AppVersion = {
    openfact: "dev-mode"
};