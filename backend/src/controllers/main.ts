import express, { Request, Response } from "express";
import * as eventModel from "../models/event";
import { MoodEvent } from "../types/event";
const mainController = express.Router();

mainController.get("/api", async (_: Request, res: Response) => {
  eventModel.findAll((err: Error, mood_events: MoodEvent[]) => {
    if(err){
      return res.status(500).json({"errorMessage": err.message});
    }
   return res.status(200).json({"data": mood_events});
  })
});

mainController.get("/api/:id", async (req: Request, res: Response) => {
  const event_id: string = req.params.id;
  eventModel.findOne(event_id, (err: Error, mood_event: MoodEvent) => {
    if(err){
      return res.status(500).json({"errorMessage": err.message});
    }
    return res.status(200).json({"data": mood_event});
  })

});

export { mainController };
