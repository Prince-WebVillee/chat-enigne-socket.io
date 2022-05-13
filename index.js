const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
app.use(cors());
app.get("/", (req, res) => {
  res.send("hello");
});
const server = http.createServer(app);

const io = socketIO(server);
io.on("connection", () => {
  console.log("New Connection");
});

port = 4000 
server.listen(port, () => {
  console.log(`server running on http://localhost:${port}}`);
});
