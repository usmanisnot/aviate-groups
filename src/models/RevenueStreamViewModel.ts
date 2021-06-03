import { JsonObject, JsonProperty } from "json2typescript";

@JsonObject("RevenueStreamViewModel")
export class RevenueStreamViewModel {

    @JsonProperty('RevenueStreamId', String, true)
    RevenueStreamId: string = undefined;

    @JsonProperty('Name', String, true)
    Name: string = undefined
}