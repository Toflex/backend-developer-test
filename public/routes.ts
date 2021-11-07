import express, { Request, Response } from 'express';
import { Login, SignUp } from './controllers';
const router = express.Router()

router.get("/ping", (req: Request, res: Response)=>{
    res.status(200).send("Pong!")
})

router.post("/login", Login)
router.post("/register", SignUp)

export {router}