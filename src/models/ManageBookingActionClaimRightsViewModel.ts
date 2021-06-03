import { JsonObject, JsonProperty } from "json2typescript";
import { BookingActionClaimRightsViewModel } from "./BookingActionClaimRightsViewModel";

@JsonObject("ManageClaimRightsBookingActionViewModel")
export class ManageClaimRightsBookingActionViewModel {

    @JsonProperty('BookingActionId', String, true)
    BookingActionId: string = "undefined";

    @JsonProperty('BookingActionDescription', String, true)
    BookingActionDescription: string = "undefined"

    @JsonProperty('BookingActionType', String, true)
    BookingActionType: string = "undefined";

    @JsonProperty('BookingActionTypeDescription', String, true)
    BookingActionTypeDescription: string = "undefined"

    @JsonProperty('IsBookingLevel', Boolean, true)
    IsBookingLevel: boolean = false

    @JsonProperty('IsBookingPartLevel', Boolean, true)
    IsBookingPartLevel: boolean = false

    @JsonProperty('BookingActionClaimRights', [BookingActionClaimRightsViewModel], true)
    BookingActionClaimRights: BookingActionClaimRightsViewModel[] = []
}