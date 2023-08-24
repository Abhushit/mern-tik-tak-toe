import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import path from "path"; 
// import * as dotenv from 'dotenv';
import 'dotenv/config';

const app = express();

//import database
import "./db.js";

//routing middleware
import MainRoute from "./src/tiktaktoe/tiktaetoe.route.js";

app.set("PORT", process.env.PORT || 9000);
//third party middlewares
// dotenv.config()
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//execute routing middleware
app.use("/api", MainRoute);

//catch 404 and forward to error handler
app.use(function (req, res, next) {
  next({
    message: "Not Found",
    status: 404,
  });
});

//error handler
app.use(function (err, req, res, next) {
  //render the error page
  res.status(err.status || 400).json({
    msg: err.message || err,
    staus: err.status,
    success: false,
  });
});

//production
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'),function (err) {
          if(err) {
              res.status(500).send(err)
          }
      });
  })
}

console.log('production', process.env.NODE_ENV)

app.listen(app.get("PORT"), function (err, done) {
  if (err) {
    console.log("Server failed to run");
  } else {
    console.log("Server running on port - ", app.get("PORT"));
  }
});
