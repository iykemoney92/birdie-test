import app from "../src/application";
import { readFileSync } from "fs";
import request from "supertest";
import "jest";
import { BasicEvent } from "../src/types/event";

const testObj : BasicEvent = {
  id: '',
  timestamp: '',
  event_type: '',
  caregiver_id: '',
  visit_id: '',
  payload: {},
  care_recipient_id: '',
}
let rawArguments = readFileSync("test_params.txt");
let testArguments = rawArguments.toString().split("\r\n");
testArguments.forEach((testArgument: string) => {
  const args: string[] = testArgument.split(" ");
  expect(args).toHaveLength(4);
  describe("GET /api", () => {
    it("returns status code 200 and checks if returned data is array", async () => {
      await request(app)
        .get("/api")
        .expect("Content-Type", /json/)
        .expect(200)
        .expect(function (res) {
          expect(Array.isArray(res.body.data)).toStrictEqual(true);
          res.body.data.forEach((r:any) => {
            //lets test data structures
            expect(r).toBeInstanceOf(testObj);
            expect(r).toHaveProperty("payload");
            expect(r).toHaveProperty("payload.timestamp");
            expect(r).toHaveProperty("payload.event_type");
            //lets test data specific structures
            if (r["payload"]["event_type"] == "mood_observation") {
              expect(r).toHaveProperty("payload.mood");
            }
          });
        });
    });
  });

  describe("GET /api/event_types", () => {
    it("returns status code 200 ", async () => {
      await request(app)
        .get("/api/event_types")
        .expect("Content-Type", /json/)
        .expect(200);
    });
  });

  describe("GET /api/:id", () => {
    it("returns status code 200 and checks if returned data is array", async () => {
      await request(app)
        .get(`/api/${args[0]}`)
        .expect("Content-Type", /json/)
        .expect(200)
        .expect(function (res) {
          expect(Array.isArray(res.body.data)).toStrictEqual(true);
        });
    });
  });

  describe("POST /api/:id/search", () => {
    it("returns status code 200 and checks if returned data is array", async () => {
      await request(app)
        .post(`/api/${args[0]}/search`)
        .send({ from: args[1], to: args[2] })
        .expect("Content-Type", /json/)
        .expect(200)
        .expect(function (res) {
          expect(Array.isArray(res.body.data)).toStrictEqual(true);
        });
    });
  });

  describe("GET /api/:id/events/:event_id", () => {
    it("returns status code 200 and checks if returned data is array", async () => {
      await request(app)
        .get(`/api/${args[0]}/events/${args[3]}`)
        .expect("Content-Type", /json/)
        .expect(200)
        .expect(function (res) {
          expect(Array.isArray(res.body.data)).toStrictEqual(true);
        });
    });
  });

  describe("POST /api/:id/events/:event_id/search", () => {
    it("returns status code 200 and checks if returned data is array", async () => {
      await request(app)
        .post(`/api/${args[0]}/events/${args[3]}/search`)
        .send({ from: args[1], to: args[2] })
        .expect("Content-Type", /json/)
        .expect(200)
        .expect(function (res) {
          expect(Array.isArray(res.body.data)).toStrictEqual(true);
        });
    });
  });
});
