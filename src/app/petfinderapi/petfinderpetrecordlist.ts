import {PetfinderPetRecord} from './petfinderpetrecord';
import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class PetfinderPetRecordList{
     @JsonProperty("pet")
    public pet: PetfinderPetRecord = undefined;
}