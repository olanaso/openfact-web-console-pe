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
  'ng2-datepicker':'vendor/ng2-datepicker'
  // 'bootstrap-datepicker':'vendor/bootstrap-datepicker',
  // 'bootstrap-timepicker':'vendor/bootstrap-timepicker'
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
   'ng2-datepicker': {
    //format: 'cjs',    
    defaultExtension: 'js',
    main: 'ng2-datepicker.js'    
  },
  //  'bootstrap-datepicker': {
  //   format: 'cjs',    
  //   defaultExtension: 'js',
  //   main: 'bootstrap-datepicker/js/bootstrap-datepicker.js'    
  // },
  //  'bootstrap-timepicker': {
  //   format: 'cjs',    
  //   defaultExtension: 'js',
  //   main: 'bootstrap-timepicker/js/bootstrap-timepicker.js'    
  // }
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
  'app/my-component',
  'app/layout',
  'app/layout/header',
  'app/layout/sidebar',
  'app/layout/container',
  'app/pages/home',
  'app/pages/about',
  'app/modules/facturas',
  'app/modules/boletas',
  'app/modules/facturas/facturas-nuevo',
  'app/modules/facturas/facturas-editar',
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
