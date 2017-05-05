import {JsonObject, JsonProperty} from "json2typescript";
@JsonObject
export class PetfinderPetIdList{
     @JsonProperty("id", [Number])
    public id:number[] = undefined;
}