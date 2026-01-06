// src/queues/delivery.queue.js
import { Queue } from "bullmq";
import { redis } from "../config/redis.js";

export const deliveryQueue = new Queue("delivery", {
  connection: redis
});
