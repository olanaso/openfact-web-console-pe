import { LocationTypeCommAgg } from './LocationTypeCommAgg';
import { AllowanceCharge } from './AllowanceCharge';

export class DeliveryTerms {
    idUbl: String;
    specialTerms: String;
    lossRiskResponsibilityCode: String;
    lossRisk: String;
    deliveryLocation: LocationTypeCommAgg;
    allowanceCharge: AllowanceCharge;
    id: String;
}