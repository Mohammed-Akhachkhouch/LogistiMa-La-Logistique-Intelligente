import request from "supertest";
import app from "../src/app.js";
import { sequelize } from "../src/config/database.js";
import { Courier } from "../src/models/courier.js";

/*
  هاد test كيختبر:
  - إنشاء courier
  - إنشاء delivery
  - منع التكرار (concurrency)
*/

beforeAll(async () => {
  // نرجّعو DB من الصفر
  await sequelize.sync({ force: true });

  // نخلق courier عندو غير بلاصة وحدة
  await Courier.create({
    name: "Test Courier",
    capacity: 1
  });
});

afterAll(async () => {
  await sequelize.close();
});

describe("LOGISTIMA DELIVERY SYSTEM", () => {

  test("POST /deliveries → أول طلب ينجح (201)", async () => {
    const res = await request(app)
      .post("/deliveries")
      .send({});

    expect(res.statusCode).toBe(201);
    expect(res.body.status).toBe("ASSIGNED");
  });

  test("POST /deliveries → ثاني طلب يترفض (409)", async () => {
    const res = await request(app)
      .post("/deliveries")
      .send({});

    expect(res.statusCode).toBe(409);
  });

  test("50 requêtes concurrentes → غير وحدة تنجح", async () => {
    // نرجّعو الحالة
    await sequelize.sync({ force: true });
    await Courier.create({
      name: "Concurrent Courier",
      capacity: 1
    });

    const requests = Array.from({ length: 50 }).map(() =>
      request(app).post("/deliveries").send({})
    );

    const responses = await Promise.all(requests);

    const success = responses.filter(r => r.status === 201);
    const failed = responses.filter(r => r.status === 409);

    expect(success.length).toBe(1);
    expect(failed.length).toBe(49);
  });

});
