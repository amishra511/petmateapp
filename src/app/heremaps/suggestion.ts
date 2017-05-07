import { JsonObject, JsonProperty } from "json2typescript";
import { Address } from './address';

@JsonObject
export class Suggestion {
    // @JsonProperty("label")
    public label: string = undefined;
    // @JsonProperty("language")
    public language: string = undefined;
    // @JsonProperty("countryCode")
    public countryCode: string = undefined;
    // @JsonProperty("locationId")
    public locationId: string = undefined;
    // @JsonProperty("address")
    public address: Address = undefined;
    // @JsonProperty("matchLevel")
    public matchLevel: string = undefined;
}