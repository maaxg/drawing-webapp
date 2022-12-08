import express, { Request, Response } from "express";
import http from "http";
import { Server } from "socket.io";
const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.get("/", (req: Request, res: Response) => {
  res.sendFile(`${__dirname}/index.html`);
});

io.on("connection", (socket) => {
  socket.on("lineTo", (lineTo) => {
    io.emit("lineTo", lineTo);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
