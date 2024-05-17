import express from "express";
import cors from "cors";
import WsRouter from "./WsRouter.js";
import ApiRouter from "./ApiRouter.js";
import os from 'os';

//setup express server
const app = express();
app.use(express.json());
app.use(cors());

//setup REST api router
const apiRouter = new ApiRouter();
apiRouter.attachTo(app);

//start server
const port = 3002
const httpServer = app.listen(port);
console.log("Server started at port " + port);

//setup Websocket router
const wsRouter = new WsRouter();
wsRouter.attachTo(httpServer);

//print current IPv4 address
const networkInterfaces = os.networkInterfaces();
let localIP = '';
for (const interfaceName in networkInterfaces) {
  const interfaceInfo = networkInterfaces[interfaceName];
  for (const info of interfaceInfo) {
    // Check if the address is IPv4 and not internal (localhost)
    if (info.family === 'IPv4' && !info.internal) {
      localIP = info.address;
      break;
    }
  }

  if (localIP) {
    break;
  }
}
if (localIP) {
  console.log(`Server reachable in the wifi network at IP address: ${localIP}:${port}`);
} else {
  console.log('No external IPv4 address found.');
}
