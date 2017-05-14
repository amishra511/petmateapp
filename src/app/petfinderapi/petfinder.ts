import {PetfinderAuthData} from './petfinderauthdata';
import {PetfinderBreedList} from './petfinderbreedlist';
import {PetfinderPetRecord} from './petfinderpetrecord';
import {PetfinderPetIdList} from './petfinderpetidlist';
import {PetfinderPetRecordList} from './petfinderpetrecordlist';
import {PetfinderShelterRecord} from './petfindershelterrecord';
import {PetfinderShelterRecordList} from './petfindershelterrecordlist';
import {PetfinderHeaderType} from './petfinderheadertype';
import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class PetFinder{
    //    @JsonProperty("header")
    public header: PetfinderHeaderType = undefined;
    //    @JsonProperty("lastOffset")
    public lastOffset: string = undefined;
    //    @JsonProperty("auth")
    public auth: PetfinderAuthData = undefined;
    //    @JsonProperty("pet")
    public pet:PetfinderPetRecord = undefined;
    //    @JsonProperty("petIds")
    public petIds:PetfinderPetIdList = undefined;
    //    @JsonProperty("pets")
    public pets: PetfinderPetRecordList = undefined;
    //    @JsonProperty("breeds")
    public breeds: PetfinderBreedList = undefined;
    //    @JsonProperty("shelter")
    public shelter: PetfinderShelterRecord = undefined;
    //    @JsonProperty("shelters")
    public shelters: PetfinderShelterRecordList= undefined;
}