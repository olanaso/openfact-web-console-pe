var config = {
  apiEndpoint: (process.env.OPENFACT_ENDPOINT != null ? process.env.OPENFACT_ENDPOINT : process.env.OPENFACT_SERVICE + '-' + process.env.OPENSHIFT_BUILD_NAMESPACE),
  secureApiEndpoint: (process.env.SECURE_OPENFACT_ENDPOINT != null ? process.env.SECURE_OPENFACT_ENDPOINT : process.env.SECURE_OPENFACT_SERVICE + '-' + process.env.SECURE_OPENFACT_SERVICE),
  keycloakEnabled: process.env.KEYCLOAK_AUTH_SERVER_URL ? true : false
};

module.exports = config;
