//  OpenShift sample Node application
var express = require('express'),
    http = require('http'),
    request = require('request'),
    fs = require('fs'),
    app = express(),
    path = require("path"),
    keycloakConfig = require('./src/configenv/keycloak.config.js'),
    openfactConfig = require('./src/configenv/openfact.config.js');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    secport = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8443;

// error handling
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something bad happened!');
});

// keycloak config server
app.get('/config/keycloak.json', function (req, res, next) {
    res.json(keycloakConfig);
});
// openfact config server
app.get('/config/openfact.json', function (req, res, next) {
    res.json(openfactConfig);
});

app.use(express.static(path.join(__dirname, '/dist')));

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

console.log("openfact config: " + JSON.stringify(openfactConfig));
console.log("keycloak config: " + JSON.stringify(keycloakConfig));

if (process.env.KEYCLOAK_AUTH_SERVER_URL) {
    // register client
    console.log("fetching access token");

    request.post({
        uri: (process.env.KEYCLOAK_AUTH_SERVER_URL || process.env.KEYCLOAK_SERVICE_URL) + '/realms/' + process.env.KEYCLOAK_REALM + '/protocol/openid-connect/token',
        strictSSL: false,
        json: true,
        form: {
            username: process.env.KEYCLOAK_USERNAME,
            password: process.env.KEYCLOAK_PASSWORD,
            grant_type: 'password',
            client_id: 'admin-cli'
        }

    }, function (err, resp, body) {
        if (!err && resp.statusCode == 200) {
            console.log("Access token result: " + resp.statusCode + " " + resp.statusMessage + " " + JSON.stringify(body));
            var token = body.access_token;

            // register client
            console.log("registering client '" + process.env.KEYCLOAK_RESOURCE + "' in realm '" + process.env.KEYCLOAK_REALM + "' at " + process.env.KEYCLOAK_AUTH_SERVER_URL || process.env.KEYCLOAK_SERVICE_URL);
            request.post({
                uri: (process.env.KEYCLOAK_AUTH_SERVER_URL || process.env.KEYCLOAK_SERVICE_URL) + '/admin/realms/' + process.env.KEYCLOAK_REALM + '/clients',
                strictSSL: false,
                auth: {
                    bearer: token
                },
                json: {
                    clientId: process.env.KEYCLOAK_RESOURCE || 'openfact-web-console',
                    enabled: true,
                    protocol: "openid-connect",
                    redirectUris: [
                        'http://' + process.env.HOSTNAME_HTTP + '/*',
                        'https://' + process.env.HOSTNAME_HTTPS + '/*'
                    ],
                    webOrigins: [
                        "*"
                    ],
                    "bearerOnly": false,
                    "publicClient": true
                }
            }, function (err, resp, body) {
                console.log("register client result: " + resp.statusCode + " " + resp.statusMessage + " " + JSON.stringify(body));
            });
        } else {
            console.log("Error cloud not establish a authentication");
        }
    });
} else {
    console.log("Skipping KEYCLOAK configuration: missing KEYCLOAK_AUTH_SERVER_URL");
}

http.createServer(app).listen(port);

console.log('HTTP Server running on http://%s:%s', ip, port);

module.exports = app;
