import { Temperature } from './Temperature';

export class HazardousGoodsTransit {
    transportEmergencyCardCode: String;
    packingCriteriaCode: String;
    hazardousRegulationCode: String;
    inhalationToxicityZoneCode: String;
    transportAuthorizationCode: String;
    maximumTemperature: Temperature;
    minimumTemperature: Temperature;
    id: String;
}