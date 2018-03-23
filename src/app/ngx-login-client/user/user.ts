import { Entity } from './entity';

export class User implements Entity {
  id: string;
  company?: string;
  fullName: string;
  imageURL: string;
  username: string;
  bio?: string;
  url?: string;
  email?: string;
  defaultLanguage?: string;
}
