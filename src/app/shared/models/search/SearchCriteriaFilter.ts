import { SearchCriteriaFilterOperator } from './SearchCriteriaFilterOperator';

export class SearchCriteriaFilter {
    name: string;
    value: any;
    operator: string;

    constructor(name: string, value: any, operator: string) {
        this.name = name;
        this.value = value;
        this.operator = operator;
    }

}
