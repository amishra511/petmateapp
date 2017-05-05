import {PetfinderShelterRecord} from './petfindershelterrecord';
import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class PetfinderShelterRecordList{
    @JsonProperty("shelter", [PetfinderShelterRecord])
    public shelter:PetfinderShelterRecord[] = undefined;
}