/**
 * Created by AHREN on 10/08/2016.
 */
import { provideRouter, RouterConfig } from '@angular/router';
import { CertifiedsComponent } from './certifieds.component';
import { CreateCertifiedComponent } from './create-certified/create-certified.component';
import { EditCertifiedComponent } from './edit-certified/edit-certified.component';

export const CertifiedsRoutes: RouterConfig = [
  { path: 'organizations/:organization/certifieds', component: CertifiedsComponent },
  { path: 'organizations/:organization/certifieds/create-certified', component: CreateCertifiedComponent },
  {
    path: 'organizations/edit-organization/:organization',
    redirectTo: '/organizations/edit-organization/:organization/certifieds',
    pathMatch: 'full'
  },
  { path: 'organizations/edit-organization/:organization/certifieds/edit-certified/:id', component: EditCertifiedComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(CertifiedsRoutes)
];
