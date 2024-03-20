# Doora Mock Server

This is a simple Node.js server using express for managing DOORA devices.

Functionality includes:
- REST api for the Doora device to connect to
- Websocket endpoint for other devices to receive live updates

## Running the server

Make sure that Node.js and npm are installed on your system. You can check this by running the following commands in your console:

    node --version
    npm --version

(I am using Node.js version v20.3.0 and npm v9.6.7)

If both are installed you 
1. enter the source directory
1. install the dependencies with ```npm install```
1. run the server with ```npm run dev```

## Project structure

The project source code is located in */src*. All the following folders are contained in this folder.
- */assets* Static data that is not changed by the program
- */controllers* The controllers (software components that handle requests) for the REST API
- */live* The components for handling live feed over Websockets
- */mockery* Components for simulating behavoir of external devices for testing purposes
- *ApiRouter* The router for the REST API
- *index.js* The starting point of the program
- *WsRouter* The router for the Websockts


## REST api

The REST api endpoint controllers are located in *src/controllers*. The routing of the REST endpoints is done in the ApiRouter file.

## Websocket

The Websocket endpoint is located in *src/live*