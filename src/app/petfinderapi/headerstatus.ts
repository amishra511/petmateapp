import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject
export class Status{
    @JsonProperty("code")
    public code: number = undefined;
    @JsonProperty("message")
    public message:string = undefined;
}