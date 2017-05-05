import {Status} from './headerstatus';
import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class PetfinderHeaderType{
     @JsonProperty("version")
    public version: string  = undefined;
     @JsonProperty("timestamp")
    public timestamp: string  = undefined;
     @JsonProperty("status")
    public status: Status  = undefined;
}