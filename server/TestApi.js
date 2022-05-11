import { Router } from "express";

export function TestApi(mongoDatabase) {
    const router = new Router();

    router.get("/", async (req, res) => {
        const students = await mongoDatabase
            .collection("Students").find().toArray()
        res.json(students);
    });
    return router;
}