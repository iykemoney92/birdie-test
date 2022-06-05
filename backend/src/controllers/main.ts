import express, { Request, Response } from "express";
import * as eventModel from "../models/event";
import { BasicEvent } from "../types/event";
const mainController = express.Router();

mainController.get("/api", async (_: Request, res: Response) => {
  eventModel.findAll((err: Error, events: BasicEvent[]) => {
    if (err) {
      return res.status(500).json({ errorMessage: err.message });
    }
    return res.status(200).json({ data: events });
  });
});

mainController.get("/api/event_types", async (_: Request, res: Response) => {
  eventModel.getEventTypes((err: Error, result: any) => {
    if (err) {
      return res.status(500).json({ errorMessage: err.message });
    }
    return res.status(200).json({ data: result });
  });
});

mainController.get("/api/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  eventModel.findByRecipientId(id, (err: Error, events: BasicEvent[]) => {
    if (err) {
      return res.status(500).json({ errorMessage: err.message });
    }
    return res.status(200).json({ data: events });
  });

  mainController.post("/api/:id/search", async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const to: string = req.body.to;
    const from: string = req.body.from;
    eventModel.findByRecipientIdAndDate(id,  from, to, (err: Error, events: BasicEvent[]) => {
      if (err) {
        return res.status(500).json({ errorMessage: err.message });
      }
      return res.status(200).json({ data: events });
    }); });

  mainController.get("/api/:id/events/:event_id", async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const event_id: string = req.params.event_id;
    eventModel.findEventByRecipientId(id, event_id, (err: Error, events: BasicEvent[]) => {
      if (err) {
        return res.status(500).json({ errorMessage: err.message });
      }
      return res.status(200).json({ data: events });
    }); });

  mainController.post("/api/:id/events/:event_id/search", async (req: Request, res: Response) => {
    const id: string = req.params.id;
    const event_id: string = req.params.event_id;
    const to: string = req.body.to;
    const from: string = req.body.from;
    console.log([event_id, to, from, id]);
    eventModel.findEventByRecipientIdAndDate(id, event_id, from, to, (err: Error, events: BasicEvent[]) => {
      if (err) {
        return res.status(500).json({ errorMessage: err.message });
      }
      return res.status(200).json({ data: events });
    }); });

});

export { mainController };
