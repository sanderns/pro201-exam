import {Router} from "express";

export function GroupApi(mongoDatabase){
    const router = new Router();

    router.get("/", async (req, res) => {
        const groups = await mongoDatabase
            .collection("Groups").find().toArray()
        res.json(groups);
    });

    return router;
}