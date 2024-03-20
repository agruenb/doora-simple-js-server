import { WebSocketServer } from "ws";
import statusFeed from "./live/StatusFeed.js";

export default class WsRouter {

    _wsServer;

    constructor() {
        this._wsServer = new WebSocketServer({ noServer: true });
    }

    getStatusFeed() {
        return this._statusFeed;
    }

    attachTo(httpServer) {
        httpServer.on('upgrade', (request, socket, head) => {
            this._wsServer.handleUpgrade(request, socket, head, webSocket => {
                this.route(request.url, socket, webSocket);
            });
        });
    }

    route(path, socket, webSocket) {
        switch (path) {
            case "/status":
                webSocket.onmessage = (event) => {
                    console.log(event.data);
                }
                statusFeed.subscribe(webSocket);
                break;
            default:
                console.log("Undefined websocket requested");
                socket.destroy();
                break;
        }
    }
}