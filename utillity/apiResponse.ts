import { GetMsg, ResponseCode } from "./responseCode"

export class ApiResponse {
    
    Error(code:string, message?:string):Object {  
        var status = false
        message = message==undefined ? GetMsg(code): message
        
        return {
            status,
            code,
            message
        }
    }

    Success(code:string, data:any, message?:string):Object {  
        var status = true
        message = message==undefined ? GetMsg(code): message
        
        return {
            status,
            code,
            message,
            data
        }
    }

    PlainSuccess(code:string, message?:string):Object {  
        var status = true
        message = message==undefined ? GetMsg(code): message

        return {
            status,
            code,
            message
        }
    }

    ValidationError(code:string,validationError:string, message?:string): Object {
        var status = false
        message = message==undefined ? GetMsg(code): message
        return {
            status,
            code,
            message,
            validationError
        } 
    }
}

