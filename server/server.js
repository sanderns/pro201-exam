import express from "express";
import {MongoClient} from "mongodb";
import {StudentsApi} from "./studentsApi.js";
import path from "path";
import * as dotenv from "dotenv";
import bodyParser from "body-parser";
import {GroupApi} from "./groupApi.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());

const mongoClient = new MongoClient(process.env.MONGODB_URL);
mongoClient.connect().then(async () => {
    console.log("Connected to mongodb");
    app.use(
        "/api/students",
        StudentsApi(mongoClient.db(process.env.MONGODB_DATABASE || "SmidigProsjekt"))
    );
});

const mongoClientGroup = new MongoClient(process.env.MONGODB_URL);
mongoClientGroup.connect().then(async () => {
    console.log("Connected to mongodb");
    app.use(
        "/api/groups",
        GroupApi(mongoClientGroup.db(process.env.MONGODB_DATABASE || "SmidigProsjekt"))
    );
});

app.use(express.static("../client/dist"))

app.use((req, res, next) => {
    if (req.method === "GET" && !req.path.startsWith("/api")) {
        res.sendFile(path.resolve("../client/dist/index.html"));
    } else {
        next();
    }
});


const server = app.listen(process.env.PORT || 3000, () => {
    console.log("Server started on http://localhost:" + server.address().port)
})