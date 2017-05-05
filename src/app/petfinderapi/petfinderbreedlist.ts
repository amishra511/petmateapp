import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class PetfinderBreedList{
    @JsonProperty("breed", [String])
    public breed: string[] = undefined;;
    @JsonProperty("animal")
    public animal: string = undefined;;
}