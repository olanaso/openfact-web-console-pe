import { Team } from './team';
import { User } from '../../ngx-login-client';

export interface Organization {
  id: string;
  name: string;
  description: string;
  owner: OrganizationOwner;
  relationalData?: RelationalData;
  useCustomSmtpConfig: boolean;
  useCustomCertificates: boolean;
  smtpServer?: SmtpServerConfig;
}

export class OrganizationOwner {
  id: string;
}

export class RelationalData {
  owner?: User;
}

export interface SmtpServerConfig {
  host: string;
  port: string;
  from?: string;
  ssl?: string;
  starttls?: string;
  auth?: string;
  user?: string;
  password?: string;
}
