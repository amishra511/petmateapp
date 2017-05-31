import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class PetContactType{
    // @JsonProperty("name")
    public name: string  = undefined;
    // @JsonProperty("address1")
    public address1: string = undefined;
    // @JsonProperty("address2")
    public address2: string = undefined;
    // @JsonProperty("state")
    public state: string = undefined;
    // @JsonProperty("zip")
    public zip: string = undefined;
    // @JsonProperty("phone")
    public phone: string = undefined;
    // @JsonProperty("fax")
    public fax: string = undefined;
    // @JsonProperty("email")
    public email:string = undefined;
}