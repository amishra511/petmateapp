import {PetPhotoType} from './petphototype';
import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class Photos{
      @JsonProperty("photo", [PetPhotoType])
    public photo: PetPhotoType[];
}