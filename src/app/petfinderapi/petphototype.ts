import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class PetPhotoType{
    @JsonProperty("value")
    public value:string;
    @JsonProperty("id")
    public id:string;
    @JsonProperty("size")
    public size:string;
}