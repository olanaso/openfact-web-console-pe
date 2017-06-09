import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

import { KeycloakOAuthService } from '../../keycloak/keycloak.oauth.service';

const openfactResource = 'openfact';
const kcAccountResource = 'account';
const kcRealmManagementResource = 'realm-management';

@Directive({
  selector: '[openfactAccess]'
})
export class AccessDirective {

  constructor(private _viewContainer: ViewContainerRef, private _templateRef: TemplateRef<any>) {
  }

  @Input()
  set openfactAccess(access: string) {
    if (access === 'admin') {
      this.updateView(this.isAdmin());
    } else if (access === 'organizationMenu') {
      this.updateView(this.canAccessOrganizationsMenu());
    } else if (access === 'securityMenu') {
      this.updateView(this.canAccessSecurityMenu());

    } else if (access === 'createOrganizations') {
      this.updateView(this.canCreateOrganizations());
    } else if (access === 'manageOrganizations') {
      this.updateView(this.canManageOrganizations());
    } else if (access === 'viewOrganizations') {
      this.updateView(this.canViewOrganizations());
    } else if (access === 'viewDocuments') {
      this.updateView(this.canViewDocuments());
    } else if (access === 'manageDocuments') {
      this.updateView(this.canManageDocuments());

    } else if (access === 'manageUsers') {
      this.updateView(this.canManageUsers());
    } else {
      this.updateView(false);
    }
  }

  private updateView(state: boolean) {
    this._viewContainer.clear();
    if (state) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    }
  }

  private isAdmin() {
    return this.hasRole('admin', openfactResource);
  }

  // Menus
  private canAccessSecurityMenu() {
    return this.canViewUsers() || this.canManageUsers();
  }

  private canAccessOrganizationsMenu() {
    return true;
  }

  // Openfact
  private canCreateOrganizations() {
    return this.hasRole('create-organization', openfactResource);
  }

  private canManageOrganizations() {
    return this.hasRole('manage-organization', openfactResource);
  }

  private canViewOrganizations() {
    return this.hasRole('view-organization', openfactResource);
  }


  private canViewDocuments() {
    return this.hasRole('view-document', openfactResource);
  }

  private canManageDocuments() {
    return this.hasRole('manage-document', openfactResource);
  }

  // Keycloak
  private canViewUsers() {
    return this.hasRole('view-users', kcRealmManagementResource);
  }

  private canManageUsers() {
    return this.hasRole('manage-users', kcRealmManagementResource);
  }

  private hasRole(role: string, resource: string) {
    return KeycloakOAuthService.auth.authz.hasRealmRole(role) || KeycloakOAuthService.auth.authz.hasResourceRole(role, resource);
  }

}
