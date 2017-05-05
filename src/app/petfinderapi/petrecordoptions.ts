import {PetOptionType} from './petoptiontype';
import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class Options{
     @JsonProperty("option", [PetOptionType])
    public option : PetOptionType[] = undefined;
}