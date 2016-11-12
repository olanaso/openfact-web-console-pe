import { SearchCriteriaFilter } from './search-criteria-filter';
import { OrderBy } from './order-by';
import { Paging } from './paging';

export class SearchCriteria {
    filterText: String;
    filters: Array<SearchCriteriaFilter>;
    orders: Array<OrderBy>;
    paging: Paging;
}
