import { Team } from './team';
import { User } from '../../ngx-login-client';

export interface Organization {
  id: string;
  name: string;
  type: string;
  description: string;
  useCustomSmtpConfig: boolean;
  useCustomCertificates: boolean;
  smtpServer?: SmtpServerConfig;
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
