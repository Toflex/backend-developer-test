import { userCol } from "../db/mongoConfig";
import uuid = require('uuid');
import passwordHash = require('password-hash');


export interface User {
    _id: uuid
    email: string,
    password: string,
    firstName: string,
    lastName: string
}

export const DoesEmailExist = async (email:string): Promise<boolean> => {
    var count = await userCol.count({ 'email': email })
    console.log("User count "+count);
    return count != 0
}


export const AddUser = async (user: User): Promise<boolean> => {
    const obj = {
        _id: uuid.v4(),
        email: user.email,
        password: user.password,
        firstname: user.firstName,
        lastname: user.lastName
    }
    var res = await userCol.insertOne(obj);
    console.log(`Insert: ${res.acknowledged}`);
    
  return res.acknowledged
}

export const VerifyCredentials = async (email: string, password: string) => {
    var hashedPassword = passwordHash.generate(password);
    var count = await userCol.count({ email, password: hashedPassword})
    console.log("Vaid credentials count "+count);
    return count != 0
}