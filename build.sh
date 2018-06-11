#!/usr/bin/env bash
ng build --prod --aot --build-optimizer
docker build -t openfact/openfact-ui .
docker build -t openfact/openfact-ui-openshift -f Dockerfile.deploy .
docker tag openfact/openfact-ui openfact/openfact-ui:$(git rev-parse --short HEAD);
docker tag openfact/openfact-ui-openshift openfact/openfact-ui-openshift:$(git rev-parse --short HEAD);
docker push openfact/openfact-ui
docker push openfact/openfact-ui-openshift
