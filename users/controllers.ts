import { Request, Response } from 'express';
import apiResponse = require("../utillity/apiResponse");
import apiResponseCode = require("../utillity/responseCode");


const resObj = new apiResponse.ApiResponse()
const resCode = apiResponseCode.ResponseCode


export const ViewTeams = (req: Request, res: Response) => {
    
    res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS))
}

export const CompletedFixtures = (req: Request, res: Response) => {
    
    res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS))
}

export const PendingFixtures = (req: Request, res: Response) => {
    
    res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS))
}

export const Search = (req: Request, res: Response) => {
    
    res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS))
}