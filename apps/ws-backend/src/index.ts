import { WebSocketServer } from "ws";
import {prisma} from '@repo/db/client';

const server = new WebSocketServer({
    port:8080
});

server.on("connection",(socket) => {

    prisma.user.create({
        data: {
            username : Math.random().toString(),
            email: Math.random.toString(),
            password:Math.random().toString(),
        }
    });
    socket.send("hi there from the server")
})