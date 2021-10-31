const express=require("express");

const socket=require("socket.io");

const app=express();
app.use(express.static("public"));

let PORT=3000;

let server=app.listen(PORT,()=>{
    console.log("server is listening at PORT " + PORT);
}) 

let io=socket(server);

io.on("connection",(socket)=>{
    console.log("Made socket connection");

    socket.on("beginPath",(data)=>{
        io.sockets.emit("beginPath",data);
    })
    socket.on("drawStroke",(data)=>{
        io.sockets.emit("drawStroke",data);
    })
    socket.on("redoUndo",(data)=>{
        io.sockets.emit("redoUndo",data);
    })
})