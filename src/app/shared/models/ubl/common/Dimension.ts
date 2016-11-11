import { Measure } from './Measure';

export class Dimension {
    attributeID: String;
    measure: Measure;
    description: Array<String>;
    minimumMeasure: Measure;
    maximumMeasure: Measure;
    id: String;
}