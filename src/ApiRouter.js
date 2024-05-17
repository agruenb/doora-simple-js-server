import liveTagPostControl from "./controllers/liveTag.post.js";
import testGetControl from "./controllers/test.get.js";
import bootPostControl from "./controllers/boot.post.js";
import heartbeatPostControl from "./controllers/heartbeat.post.js";
import newWifiPostControl from "./controllers/newWifi.post.js";
import debugPostControl from "./controllers/debug.post.js"

export default class ApiRouter {

    routePrefix = "/api/v1/lcl-dvc";

    attachTo(app) {
        app.post(`${this.routePrefix}/boot`, async (req, res) => {
            bootPostControl(req, res);
        });
        app.post(`${this.routePrefix}/heartbeat`, async (req, res) => {
            heartbeatPostControl(req, res);
        });
        app.post(`${this.routePrefix}/tag-update`, async (req, res) => {
            liveTagPostControl(req, res);
        });
        app.post(`${this.routePrefix}/new-wifi`, async (req, res) => {
            newWifiPostControl(req, res);
        });
        app.post(`${this.routePrefix}/debug`, async (req, res) => {
            debugPostControl(req, res);
        });
        app.get("/test", async (req, res) => {
            testGetControl(req, res);
        })
    }
}