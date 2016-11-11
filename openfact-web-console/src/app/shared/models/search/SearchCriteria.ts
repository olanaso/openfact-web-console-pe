import { SearchCriteriaFilter } from './SearchCriteriaFilter';
import { OrderBy } from './OrderBy';
import { Paging } from './Paging';

export class SearchCriteria {
    filterText: String;
    filters: Array<SearchCriteriaFilter>;
    orders: Array<OrderBy>;
    paging: Paging;
}
