import { Router } from "express";

export function StudentsApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const students = await mongoDatabase
            .collection("Students").find().toArray()
        res.json(students);
    });

    router.post("/", (req, res) => {
        const {name, study, subject, gradeGoal, studyTime, aboutMe } = req.body;
        mongoDatabase.collection("Students").insertOne({name, study, subject, gradeGoal, studyTime, aboutMe});
        res.sendStatus(200);
    })

    return router;
}