import {PetfinderAuthData} from './petfinderauthdata';
import {PetfinderBreedList} from './petfinderbreedlist';
import {PetfinderPetRecord} from './petfinderpetrecord';
import {PetfinderPetIdList} from './petfinderpetidlist';
import {PetfinderPetRecordList} from './petfinderpetrecordlist';
import {PetfinderShelterRecord} from './petfindershelterrecord';
import {PetfinderShelterRecordList} from './petfindershelterrecordlist';
import {PetfinderHeaderType} from './petfinderheadertype';

export class PetFinder{
    header: PetfinderHeaderType;
    lastOffset: string;
    auth: PetfinderAuthData;
    pet:PetfinderPetRecord;
    petIds:PetfinderPetIdList;
    pets: PetfinderPetRecordList;
    breeds: PetfinderBreedList;
    shelter: PetfinderShelterRecord;
    shelters: PetfinderShelterRecordList
}