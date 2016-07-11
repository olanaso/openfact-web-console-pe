    import { RouterConfig }          from '@angular/router';
    import { ModuleFacturaComponent } from './module-factura.component';
    
    export const FacturaRoutes: RouterConfig = [
      { path: 'factura',  component: ModuleFacturaComponent }
  //    {
  //   path: 'heroes',
  //   component: ModuleFacturaComponent,
  //   children: [
  //     { path: ':id',  component: CrisisDetailComponent },
  //     { path: '',     component: CrisisListComponent }
  //   ]
  // }
     
    ];