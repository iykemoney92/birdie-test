import { BasicEvent } from "../types/event";
import { db } from "../db";
import { RowDataPacket } from "mysql2";

export const findAll = (callback: Function) => {
  const queryString = `SELECT * FROM events  ORDER BY timestamp DESC`;

  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;

    const events: BasicEvent[] = [];

    rows.forEach((row) => {
      events.push({
        id: row.id,
        timestamp: row.timestamp,
        event_type: row.event_type,
        caregiver_id: row.caregiver_id,
        visit_id: row.visit_id,
        payload: row.payload,
        care_recipient_id: row.care_recipient,
      });
    });

    callback(null, events);
  });
};

export const findByRecipientId = (recipientId: string, callback: Function) => {
  const queryString = `SELECT * FROM events WHERE care_recipient_id = ? ORDER BY timestamp DESC`;

  db.query(queryString, recipientId, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;

    const events: BasicEvent[] = [];

    rows.forEach((row) => {
      events.push({
        id: row.id,
        timestamp: row.timestamp,
        event_type: row.event_type,
        caregiver_id: row.caregiver_id,
        visit_id: row.visit_id,
        payload: row.payload,
        care_recipient_id: row.care_recipient,
      });
    });

    callback(null, events);
  });
};
export const findEventByRecipientId = (
  recipientId: string,
  eventId: string,
  callback: Function
) => {
  const queryString = `SELECT * FROM events WHERE care_recipient_id = ? AND event_type=?  ORDER BY timestamp DESC`;

  db.query(queryString, [recipientId, eventId], (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;

    const events: BasicEvent[] = [];

    rows.forEach((row) => {
      events.push({
        id: row.id,
        timestamp: row.timestamp,
        event_type: row.event_type,
        caregiver_id: row.caregiver_id,
        visit_id: row.visit_id,
        payload: row.payload,
        care_recipient_id: row.care_recipient,
      });
    });

    callback(null, events);
  });
};

export const findByRecipientIdAndDate = (
  recipientId: string,
  from: string,
  to: string,
  callback: Function
) => {
  const queryString = `SELECT * FROM events WHERE care_recipient_id = ?
  AND (timestamp BETWEEN ? AND ?)  ORDER BY timestamp DESC`;

  db.query(queryString, [recipientId, from, to], (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;

    const events: BasicEvent[] = [];

    rows.forEach((row) => {
      events.push({
        id: row.id,
        timestamp: row.timestamp,
        event_type: row.event_type,
        caregiver_id: row.caregiver_id,
        visit_id: row.visit_id,
        payload: row.payload,
        care_recipient_id: row.care_recipient,
      });
    });

    callback(null, events);
  });
};

export const findEventByRecipientIdAndDate = (
  recipientId: string,
  eventId: string,
  from: string,
  to: string,
  callback: Function
) => {
  const queryString = `SELECT * FROM events WHERE care_recipient_id = ?
  AND event_type=?
  AND (timestamp BETWEEN ? AND ?)  ORDER BY timestamp DESC`;

  db.query(queryString, [recipientId, eventId, from, to], (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;

    const events: BasicEvent[] = [];

    rows.forEach((row) => {
      events.push({
        id: row.id,
        timestamp: row.timestamp,
        event_type: row.event_type,
        caregiver_id: row.caregiver_id,
        visit_id: row.visit_id,
        payload: row.payload,
        care_recipient_id: row.care_recipient,
      });
    });

    callback(null, events);
  });
};

export const getEventTypes = (callback: Function) => {
  const queryString = "SELECT DISTINCT event_type FROM events";

  db.query(queryString, (err, result) => {
    if (err) {
      callback(err);
    }
    const rows = <RowDataPacket[]>result;

    const results: any[] = [];

    rows.forEach((row) => {
      results.push(row);
    });

    callback(null, results);
  });
};
