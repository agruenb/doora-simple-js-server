import EventEmitter from "events";
import { WebSocket } from "ws";

class StatusFeed extends EventEmitter {

    _subscribedSockets = [];

    constructor() {
        super();
    }

    subscribe(socket){
        this._subscribedSockets.push({
            meta:"",
            socket:socket,
        });
        console.log("Connected ", this._subscribedSockets.length);
    }

    broadcast(msg){
        for(let i = 0; i < this._subscribedSockets.length; i++){
            if(this._subscribedSockets[i].socket.readyState !== WebSocket.OPEN){
                this._subscribedSockets.splice(i, 1);
                i--;
                console.log("Delete inactive socket");
            }else{
                this._subscribedSockets[i].socket.send(msg);
            }
        }
    }
}
const statusFeed = new StatusFeed();
export default statusFeed;