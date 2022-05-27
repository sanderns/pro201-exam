import {Router} from "express";

export function GroupApi(mongoDatabase){
    const router = new Router();

    router.get("/", async (req, res) => {
        const groups = await mongoDatabase
            .collection("Groups").find().toArray()
        res.json(groups);
    });

    router.post("/", (req, res) => {
        const {name,aboutUs, gradeGoal, study, subject, studyTime } = req.body;
        mongoDatabase.collection("Groups").insertOne({name, aboutUs, gradeGoal, study, subject, studyTime});
        res.sendStatus(200);
    })

    return router;
}