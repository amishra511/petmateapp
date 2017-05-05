import {PetFinder} from './petfinder';
import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class RootObject{
    @JsonProperty("petfinder")
    public petfinder:PetFinder = undefined;
}