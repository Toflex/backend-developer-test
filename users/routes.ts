import express, { Request, Response } from 'express';
import { CompletedFixtures, PendingFixtures, Search, ViewTeams } from './controllers';
const router = express.Router()

router.get("/ping", (req: Request, res: Response)=>{
    res.status(200).send("User says, hi!")
})

router.get("/teams", ViewTeams)
router.get("/fixture/completed", CompletedFixtures)
router.get("/fixture/pending", PendingFixtures)
router.get("/search", Search)

export {router}