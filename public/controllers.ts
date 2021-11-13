import { Request, Response } from 'express';
import { Validator } from 'node-input-validator';
import passwordHash = require('password-hash');
import { DoesEmailExist, User, AddUser } from '../users/models';

import apiResponse = require("../utillity/apiResponse");
import apiResponseCode = require("../utillity/responseCode");



const resObj = new apiResponse.ApiResponse()
const resCode = apiResponseCode.ResponseCode
const salt = 5


export const Login = (req: Request, res: Response) => {
    const requestData = {...req.body}

    const v = new Validator(req.body, {
        email: 'required|email',
        password: 'required'
    });

    v.check().then(async (matched) => {
        if (!matched) {
           return res.status(406).json(resObj.ValidationError(resCode.VALIDATIONERROR,v.errors));
        } 
        

        if (requestData.email !='abc@mail.com' || requestData.password != "1234") {
            return res.status(200).json(resObj.Error( resCode.INPUTERROR))
        }
        
        res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS,"Login successful"))
    });
}

export const SignUp = (req: Request, res: Response, next) => {
    const requestData = {...req.body}

    const v = new Validator(req.body, {
        email: 'required|email',
        password: 'required|minLength:8',
        firstName: 'required',
        lastName: 'required'
    });

    v.check().then(async (matched) => {
        if (!matched) {
           return res.status(406).json(resObj.ValidationError(resCode.VALIDATIONERROR,v.errors));
        } 

        // Check if email address already exist
        if (await DoesEmailExist(requestData.email)){
            return res.status(200).json(resObj.Error( resCode.NOSUCCESS, "Email address already exist!"))    
        }

        var user:User = requestData;
        // Hash password
        user.password = passwordHash.generate(user.password);

        // Insert record into DB
        if(!await AddUser(requestData)){
            console.log("User could not be added");
            return res.status(200).json(resObj.Error( resCode.SYSTEMERROR))
        }


        // Create user session
        const sess = req.session;
        req.session["email"] = user.email

        res.status(200).json(resObj.PlainSuccess( resCode.SUCCESS,"Registration successful"))
    });
}
