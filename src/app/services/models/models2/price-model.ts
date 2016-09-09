export class PriceModel {
    priceAmount: number;//precio
    priceTypeCode: String;//codigo 

}
export class AlternativePriceModel {
    alternativeConditionPrice: Array<PriceModel> = [];;
}
