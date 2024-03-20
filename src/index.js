import express from "express";
import cors from "cors";
import WsRouter from "./WsRouter.js";
import DooraMocker from "./mockery/dooraMocker.js";
import statusFeed from "./live/StatusFeed.js";
import ApiRouter from "./ApiRouter.js";

const app = express();

app.use(express.json());
app.use(cors());

const apiRouter = new ApiRouter();
apiRouter.attachTo(app);

const httpServer = app.listen(3002);
console.log("Management API at port 3002");

const wsRouter = new WsRouter();
wsRouter.attachTo(httpServer);

const tagsFilePath = "./src/assets/tags.json";
const dooraMocker = new DooraMocker(tagsFilePath);

//mockery
/* setInterval(() => {
    const randTag = dooraMocker.randomTag();
    statusFeed.broadcast(JSON.stringify(randTag));
    console.log("Found Tag " + randTag.id);
}, 5000); */

