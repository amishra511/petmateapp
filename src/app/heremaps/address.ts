import {JsonObject, JsonProperty} from "json2typescript";
    
    @JsonObject
    export class Address {
        // @JsonProperty("country")
        public country: string = undefined;
        // @JsonProperty("state")
        public state: string = undefined;
        // @JsonProperty("county")
        public county: string = undefined;
        // @JsonProperty("city")
        public city: string = undefined;
        // @JsonProperty("postalCode")
        public postalCode: string = undefined;
    }