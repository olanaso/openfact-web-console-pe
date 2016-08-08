"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'moment': 'vendor/moment/moment.js',
  'ng2-bootstrap': 'vendor/ng2-bootstrap',
  'underscore': 'vendor/underscore/underscore.js'
};

/** User packages configuration. */
const packages: any = {
  'moment': {
    format: 'cjs'
  },
  'ng2-bootstrap': {
    format: 'cjs',    
    defaultExtension: 'js',
    main: 'ng2-bootstrap.js'    
  },
  'underscore':{
    format: 'cjs'
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/components/util/navbar-utility',
  'app/components/util/navbar-utility-mobile',
  'app/components/util/default-header',
  'app/components/util/project-header',
  'app/components/util/project-page',
  'app/components/util/sidebar',
  'app/components/util/events-sidebar',
  'app/components/util/alerts',
  'app/components/about',
  'app/components/error',
  'app/components/organizations',
  'app/components/organizations/create-organization',
  'app/components/organizations/edit-organization',
  'app/components/organizations/edit-organization/overview',
  'app/components/organizations/edit-organization/settings',

  'app/components/organizations/invoices',
  'app/components/organizations/invoices/create-invoice',
  'app/components/organizations/invoices/edit-invoice',

  'app/components/util/button-save',
  'app/components/util/button-cancel',
  'app/components/util/button-delete',

  'app/components/util/toggle-button',
  'app/components/organizations/edit-organization/settings/address',
  'app/components/organizations/edit-organization/settings/general-information',

  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
