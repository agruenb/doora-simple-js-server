import liveTagPostControl from "./controllers/liveTag.post.js";
import testGetControl from "./controllers/test.get.js";
import bootPostControl from "./controllers/boot.post.js";
import heartbeatPostControl from "./controllers/heartbeat.post.js";

export default class ApiRouter {
    attachTo(app) {
        app.post("/lcl-dvc/boot", async (req, res) => {
            bootPostControl(req, res);
        });
        app.post("/lcl-dvc/heartbeat", async (req, res) => {
            heartbeatPostControl(req, res);
        });
        app.post("/lcl-dvc/tag-update", async (req, res) => {
            liveTagPostControl(req, res);
        });
        app.post("/lcl-dvc/new-wifi", async (req, res) => {
            newWifiPostControl(req, res);
        });
        app.get("/test", async (req, res) => {
            testGetControl(req, res);
        })
    }
}