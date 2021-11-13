
export enum ResponseCode {
    SUCCESS = 'SM001',
    SYSTEMERROR = "SM002",
    NOTFOUND = "SYS404",
    VALIDATIONERROR= 'VE422',
    INPUTERROR = 'INP001',
    NOSUCCESS = 'NSM001'
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
        case "INP001":{
            return "Validation error, please check your input."
            break;
        }

        case "VE422":{
            return "Validation error, please check your input."
            break;
        }

        case "NSM001":{
            return "Request failed!"
            break;
        }
    
        default:{
            return "Unknown response code"
            break;
        }
    }
}