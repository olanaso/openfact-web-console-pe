import { Team } from './team';
import { User } from '../../ngx-login-client';

export interface Company {
  id: string;
  name: string;
  description: string;
  owner: CompanyOwner;
  relationalData?: RelationalData;
}

export class CompanyOwner {
  id: string;
}

export class RelationalData {
  owner?: User;
}
