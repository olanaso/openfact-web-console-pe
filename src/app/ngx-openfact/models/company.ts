import { Team } from './team';
import { User } from '../../ngx-login-client';

export interface Company {
  id: string;
  name: string;
  description: string;
  owner: CompanyOwner;
  relationalData?: RelationalData;
  smtpServer?: SmtpServerConfig;
}

export class CompanyOwner {
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
