import { JsonObject, JsonProperty } from "json2typescript";
import { RevenueStreamViewModel } from "./RevenueStreamViewModel";

@JsonObject("BookingActionClaimRightsViewModel")
export class BookingActionClaimRightsViewModel {
    
    @JsonProperty('BookingActionClaimRightId', String, true)
    BookingActionClaimRightId: string = "undefined";

    @JsonProperty('TypeOfClaim', String, true)
    TypeOfClaim: string = "undefined";

    @JsonProperty('ClaimDescription', String, true)
    ClaimDescription: string = "undefined"

    @JsonProperty('IsEnabled', Boolean, true)
    IsEnabled: boolean = false

    @JsonProperty('RevenueStream', RevenueStreamViewModel, true)
    RevenueStream: RevenueStreamViewModel = new RevenueStreamViewModel()
}