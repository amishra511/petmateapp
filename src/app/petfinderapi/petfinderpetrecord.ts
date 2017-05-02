import {Media} from './petrecordmedia';
import {PetContactType} from './petcontacttype';
import {Options} from './petrecordoptions';
import {PetSizeType} from './petsizetype';
import {PetGenderType} from './petgendertype';
import {PetAgeType} from './petagetype';
import {PetfinderBreedList} from './petfinderbreedlist';
import {AnimalType} from './animaltype';

export class PetfinderPetRecord{
    id:number;
    shelterId: string;
    shelterPetId: string;
    name:string;
    animal:AnimalType;
    breeds: PetfinderBreedList;
    mix:string;
    age:PetAgeType;
    sex:PetGenderType;
    size: PetSizeType;
    options: Options
    description: string;
    lastUpdate: string;
    status:string;
    media:Media
    contact: PetContactType
}