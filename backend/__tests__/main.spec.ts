import app from "../src/application";
import request from "supertest";
import { MoodEvent } from "../src/types/event";

describe("GET /api", () => {
  it("returns status code 200 and checks if returned data is array", async () => {
    await request(app)
      .get("/api")
      .expect("Content-Type", /json/)
      .expect(200)
      .expect(function (res) {
        expect(Array.isArray(res.body.data)).toStrictEqual(true);
      });
  });
});

describe("GET /api/:id", () => {
  it("returns status code 200 and checks if returned data is object", async () => {
    const mood_event: MoodEvent = {
      event_type: "",
      visit_id: "",
      timestamp: "",
      caregiver_id: "",
      care_recipient_id: "",
      mood: "",
      id: "",
    };
    await request(app)
      .get("/api")
      .then(async (res) => {
        const test_event = res.body.data[0];
        await request(app)
          .get("/api/" + test_event["id"])
          .expect("Content-Type", /json/)
          .expect(200)
          .expect(function (res2) {
            expect(res2.body.data).toMatchObject(mood_event);
          });
      });
  });
});

