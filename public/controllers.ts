import { Request, Response } from 'express';
import apiResponse = require("../utillity/apiResponse");
import apiResponseCode = require("../utillity/responseCode");


const resObj = new apiResponse.ApiResponse()
const resCode = apiResponseCode.ResponseCode


export const Login = (req: Request, res: Response) => {
    
    res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS))
}

export const SignUp = (req: Request, res: Response) => {
    
    res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS))
}