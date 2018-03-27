import { Company } from './../models/company';
import { User } from '../../ngx-login-client';
import { ContextType } from './context-type';
import { UBLDocument } from '../models/ubl-document';

export interface Context {
  // The entity that this context is for
  user: User;
  company?: Company;
  document?: UBLDocument;
  type: ContextType;
  path: string;
  name: string;
}
