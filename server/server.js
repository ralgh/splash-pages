import path from "path";
import express from "express";
// import compression from "compression";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import config from "../config";
import render from "./render";

// Initialize express server

const server = express();

// Usual express stuff

server.use(bodyParser.json());
server.use(cookieParser());
// server.use(compression());

// Render the app server-side and send it as response

server.use(render);


// Generic server errors (e.g. not caught by components)
server.use((err, req, res, next) => {
  console.log("Error on request %s %s", req.method, req.url);
  console.log(err);
  console.log(err.stack);
  res.status(500).send("Something bad happened");
});


// Finally, start the express server

server.set("port", process.env.PORT || 3000);

server.listen(server.get("port"), () => {
  console.log(`Express ${server.get("env")} server listening on ${server.get("port")}`);
});

