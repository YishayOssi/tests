import express from "express";
import { config } from "dotenv";
import { isSafeToHike } from "./weatherUtils.js";
import { error } from "node:console";


export function Server() {
  config();
  const app = express();
  app.use(express.json());

  // create Middleware general
  app.use("/", (req, res, next) => {
    console.log(req.method, req.path);
    next();
  });


app.post("/check-weather", (req, res) => {
    try {
      const result = isSafeToHike(req.body.temperature, req.body.wind);
      res.status(200).json(result);
    } catch (err) {
        console.log(err);
        if(err.message.includes("numbers")){
            res.status(400).json({error: err.message});
        } else {
            res.status(500).json({error: "Internal server error from yishay"});
        }
    }
  });



  app.listen(process.env.PORT, () => {
    console.log(`app listen on http://localhost:${process.env.PORT}`);
  });
}



