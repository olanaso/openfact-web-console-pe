import { SearchCriteriaFilterOperator } from './SearchCriteriaFilterOperator';

export class SearchCriteriaFilter {
    name: string;
    value: any;
    type: string;
    operator: string;

    constructor(name: string, value: any, operator: string, type?: string) {
        this.name = name;
        this.value = value;
        this.operator = operator;
        this.type = type;
    }

}
