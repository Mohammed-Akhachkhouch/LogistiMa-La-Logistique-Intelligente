import { Worker } from "bullmq";
import { redis } from "../config/redis.js";

new Worker("delivery", async () => {
  await new Promise(r => setTimeout(r, 2000));
  console.log("Delivery processed");
}, { connection: redis });
