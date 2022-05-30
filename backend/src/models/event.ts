import { MoodEvent } from "../types/event";
import { db } from "../db";
import { RowDataPacket } from "mysql2";

export const findOne = (eventId: string, callback: Function) => {
  const queryString = "SELECT * FROM events WHERE id = ? AND event_type = 'mood_observation'";

  db.query(queryString, eventId, (err, result) => {
    if (err) {
      callback(err);
    }
    const row = (<RowDataPacket>result)[0];

    const mood_event: MoodEvent = {
      id: eventId,
      event_type: row.payload.event_type,
      visit_id: row.payload.visit_id,
      timestamp: row.payload.timestamp,
      caregiver_id: row.payload.caregiver_id,
      care_recipient_id: row.payload.care_recipient_id,
      mood: row.payload.mood,
    };

    callback(null, mood_event);
  });
};

export const findAll = (callback: Function) => {
  const queryString = "SELECT * FROM events WHERE event_type = 'mood_observation' ORDER BY timestamp DESC";

  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;

    const mood_events: MoodEvent[] = [];

    rows.forEach((row) => {
      const mood_event: MoodEvent = {
        id: row.payload.id,
        event_type: row.payload.event_type,
        visit_id: row.payload.visit_id,
        timestamp: row.payload.timestamp,
        caregiver_id: row.payload.caregiver_id,
        care_recipient_id: row.payload.care_recipient_id,
        mood: row.payload.mood,
      };
      mood_events.push(mood_event);
    });

    callback(null, mood_events);
  });
};
