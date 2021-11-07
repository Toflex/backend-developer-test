import { Request, Response } from 'express';
import apiResponse = require("../utillity/apiResponse");
import apiResponseCode = require("../utillity/responseCode");


const resObj = new apiResponse.ApiResponse()
const resCode = apiResponseCode.ResponseCode


export const AddTeam = (req: Request, res: Response) => {
    
    res.status(201).json(resObj.PlainSuccess( resCode.SUCCESS))
}

export const RemoveTeam = (req: Request, res: Response) => {
    
    res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS))
}

export const EditTeam = (req: Request, res: Response) => {
    
    res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS))
}

export const ViewTeam = (req: Request, res: Response) => {
    
    res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS))
}

export const GetTeams = (req: Request, res: Response) => {
    
    res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS))
}

export const AddFixture = (req: Request, res: Response) => {
    
    res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS))
}

export const RemoveFixture = (req: Request, res: Response) => {
    
    res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS))
}

export const EditFixture = (req: Request, res: Response) => {
    
    res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS))
}

export const ViewFixture = (req: Request, res: Response) => {
    
    res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS))
}

export const ViewFixtures = (req: Request, res: Response) => {
    
    res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS))
}