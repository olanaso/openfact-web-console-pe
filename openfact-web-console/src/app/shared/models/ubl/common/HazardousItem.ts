import { Measure } from './Measure';
import { Quantity } from './Quantity';
import { Party } from './Party';
import { SecondaryHazard } from './SecondaryHazard';
import { HazardousGoodsTransit } from './HazardousGoodsTransit';
import { Temperature } from './Temperature';

export class HazardousItem {
    idUbl: String;
    placardNotation: String;
    placardEndorsement: String;
    additionalInformation: String;
    UNDGCode: String;
    emergencyProceduresCode: String;
    medicalFirstAidGuideCode: String;
    technicalName: String;
    categoryName: String;
    hazardousCategoryCode: String;
    upperOrangeHazardPlacardID: String;
    lowerOrangeHazardPlacardID: String;
    markingID: String;
    hazardClassID: String;
    netWeightMeasure: Measure;
    netVolumeMeasure: Measure;
    quantity: Quantity;
    contactParty: Party;
    secondaryHazard: Array<SecondaryHazard>;
    hazardousGoodsTransit: Array<HazardousGoodsTransit>;
    emergencyTemperature: Temperature;
    flashpointTemperature: Temperature;
    additionalTemperature: Array<Temperature>;
    id: String;
}