import { Measure } from './Measure';

export class Period {
    startDate: Date;
    startTime: Date;
    endDate: Date;
    endTime: Date;
    durationMeasure: Measure;
    descriptionCode: Array<String>;
    description: Array<String>;
    id: String;
}