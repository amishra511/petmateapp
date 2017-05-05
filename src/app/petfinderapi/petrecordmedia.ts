import {Photos} from './petrecordmediaphotos';
import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class Media{
    @JsonProperty("photos")
    public photos: Photos;
}