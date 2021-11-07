import express, { Request, Response } from 'express';
import { AddFixture, AddTeam, EditFixture, EditTeam, GetTeams, RemoveFixture, RemoveTeam, ViewFixture, ViewFixtures, ViewTeam } from './controllers';
const router = express.Router()

router.get("/ping", (req: Request, res: Response)=>{
    res.status(200).send("Admin says, hi!")
})

// Team
router.post("/team/add", AddTeam)
router.delete("/team/remove/:id", RemoveTeam)
router.put("/team/edit/:id", EditTeam)
router.get("/team/:id", ViewTeam)
router.get("/team", GetTeams)

// Fixtures
router.post("/fixture/add", AddFixture)
router.delete("/fixture/remove/:id", RemoveFixture)
router.put("/fixture/edit/:id", EditFixture)
router.get("/fixture/:id", ViewFixture)
router.get("/fixture", ViewFixtures)


export {router}