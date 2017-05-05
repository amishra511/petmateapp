import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class PetfinderAuthData{
    @JsonProperty("key")
    public key:string = undefined;
    @JsonProperty("token")
    public token:string= undefined;
    @JsonProperty("expires")
    public expires : number = undefined;
    @JsonProperty("expiresString")
    public expiresString: string = undefined;
}