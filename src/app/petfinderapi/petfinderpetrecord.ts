import {Media} from './petrecordmedia';
import {PetContactType} from './petcontacttype';
import {Options} from './petrecordoptions';
import {PetSizeType} from './petsizetype';
import {PetGenderType} from './petgendertype';
import {PetAgeType} from './petagetype';
import {PetfinderBreedList} from './petfinderbreedlist';
import {AnimalType} from './animaltype';
import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class PetfinderPetRecord{
    @JsonProperty("id")
    public id:number = undefined;
    @JsonProperty("shelterId")
    public shelterId: string = undefined;
    @JsonProperty("shelterPetId")
    public shelterPetId: string = undefined;
    @JsonProperty("name")
    public name:string = undefined;
    @JsonProperty("animal")
    public animal:AnimalType = undefined;
    @JsonProperty("breeds")
    public breeds: PetfinderBreedList = undefined;
    @JsonProperty("mix")
    public mix:string = undefined;
    @JsonProperty("age")
    public age:PetAgeType = undefined;
    @JsonProperty("sex")
    public sex:PetGenderType = undefined;
    @JsonProperty("size")
    public size: PetSizeType = undefined;
    @JsonProperty("options")
    public options: Options = undefined;
    @JsonProperty("description")
    public description: string = undefined;
    @JsonProperty("lastUpdate")
    public lastUpdate: string = undefined;
    @JsonProperty("status")
    public status:string = undefined;
    @JsonProperty("media")
    public media:Media = undefined;
    @JsonProperty("contact")
    public contact: PetContactType = undefined;
}