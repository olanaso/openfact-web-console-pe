import { Organization } from './../models/organization';
import { Observable } from 'rxjs/Observable';

export class Organizations {
  current: Observable<Organization>;
  recent: Observable<Organization[]>;
}
