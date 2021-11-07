import { NOTFOUND } from "dns";

export enum ResponseCode {
    SUCCESS = 'SM001',
    SYSTEMERROR = "SM002",
    NOTFOUND = "SYS404"
}

export const GetMsg = (code:string): string => {
    switch (code) {
        case "SM001":{
            return "Request processed successfully"
            break;
        }

        case "SM002":{
            return "Request could not processed, try again later"
            break;
        }

        case "SYS404":{
            return "Endpoint not available"
            break;
        }
    
        default:{
            return "Unknown response code"
            break;
        }
    }
}