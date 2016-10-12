import { Measure } from './Measure';

export class LocationCoordinate {
    coordinateSystemCode: String;
    latitudeDegreesMeasure: Measure;
    latitudeMinutesMeasure: Measure;
    latitudeDirectionCode: String;
    longitudeDegreesMeasure: Measure;
    longitudeMinutesMeasure: Measure;
    longitudeDirectionCode: String;
    id: String;
}