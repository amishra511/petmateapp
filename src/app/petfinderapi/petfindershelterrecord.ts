import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class PetfinderShelterRecord{
    @JsonProperty("id")
    public id: string = undefined;
    @JsonProperty("name")
    public name: string = undefined;
    @JsonProperty("address1")
    public address1: string = undefined;
    @JsonProperty("address2")
    public address2:string = undefined;
    @JsonProperty("city")
    public city:string = undefined;
    @JsonProperty("state")
    public state:string = undefined;
    @JsonProperty("zip")
    public zip:string = undefined;
    @JsonProperty("country")
    public country:string = undefined;
    @JsonProperty("latitude")
    public latitude:number = undefined;
    @JsonProperty("longitude")
    public longitude:number = undefined;
    @JsonProperty("phone")
    public phone:string = undefined;
    @JsonProperty("fax")
    public fax:string = undefined;
    @JsonProperty("email")
    public email:string = undefined;

}