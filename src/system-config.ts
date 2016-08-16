"use strict";

// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  'underscore': 'vendor/underscore/underscore.js',
  'moment': 'vendor/moment/moment.js',
  'ng2-bootstrap': 'vendor/ng2-bootstrap',
  'ng2-file-upload': 'vendor/ng2-file-upload'
};

/** User packages configuration. */
const packages: any = {
  'underscore':{
    format: 'cjs',
  },
  'moment':{
    format: 'cjs'
  },
  'ng2-bootstrap': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'ng2-bootstrap.js'
  },
  'ng2-file-upload': {
    format: 'cjs',
    defaultExtension: 'js',
    main: 'ng2-file-upload.js'
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

  'app/pipes',

  'app/pages',
  'app/pages/about',
  'app/pages/error',
  'app/pages/list-organization',
  'app/pages/create-organization',  

  'app/services',
  'app/services/models',
  'app/services/providers',
  'app/services/resolvers',
  'app/services/restangular',
  'app/services/restangular-impl',

  'app/shared',
  'app/shared/shared-services',  
  'app/shared/navbar-utility',
  'app/shared/navbar-utility-mobile',
  'app/shared/default-header',
  'app/shared/project-header',
  'app/shared/project-page',
  'app/shared/sidebar',
  'app/shared/events-sidebar',
  'app/shared/alerts',
  'app/shared/button-save',
  'app/shared/button-reset',
  'app/shared/button-cancel',
  'app/shared/button-delete',
  'app/shared/toggle-button',
  
  'app/organization',
  'app/organization/overview',
  'app/organization/settings',
  'app/organization/settings/address',
  'app/organization/settings/general-information',  
  'app/organization/settings/tasks-schedule',
  
  'app/organization/invoices',
  'app/organization/invoices/create-invoice',
  'app/organization/invoices/list-invoice',
  'app/organization/invoices/edit-invoice',
  'app/organization/settings/certificate',
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
