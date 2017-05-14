import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class PetPhotoType{
    @JsonProperty("content")
    public content:string;
    @JsonProperty("id")
    public id:string;
    @JsonProperty("size")
    public size:string;
}