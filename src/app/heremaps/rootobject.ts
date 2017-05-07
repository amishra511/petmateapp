import { JsonObject, JsonProperty } from "json2typescript";
import { Suggestion } from './suggestion';
    
    @JsonObject
    export class HereRootObject {
        @JsonProperty("suggestions", [Suggestion])
        public suggestions: Suggestion[] = undefined;
    }