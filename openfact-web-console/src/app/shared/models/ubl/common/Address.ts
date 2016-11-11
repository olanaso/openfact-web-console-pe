import { Country } from './Country';
import { LocationCoordinate } from './LocationCoordinate';

export class Address {
    idUbl: String
    addressRepresentationCode: String
    addressFormatCode: String
    postbox: String
    floor: String
    room: String
    streetName: String
    additionalStreetName: String
    blockName: String
    buildingName: String
    buildingNumber: String
    inhouseMail: String
    department: String
    markAttention: String
    markCare: String
    plotIdentification: String
    citySubdivisionName: String
    cityName: String
    postalZone: String
    countrySubentity: String
    countrySubentityCode: String
    region: String
    district: String
    timezoneOffset: String
    addressLine: Array<String>;
    country: Country;
    locationCoordinate: LocationCoordinate;
    id: String
}