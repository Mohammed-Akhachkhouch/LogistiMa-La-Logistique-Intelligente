import { redis } from "../config/redis.js";

// simulate DB
const zonesFromDB = {
  "Sidi Maarif": { fee: 10 },
  "Anfa": { fee: 12 },
  "Gauthier": { fee: 8 }
};

export async function getZone(name) {
  const cached = await redis.get(`zone:${name}`);
  if (cached) {
    console.log("⚡ zone from cache");
    return JSON.parse(cached);
  }

  console.log(" zone from DB");
  const zone = zonesFromDB[name];
  if (!zone) return null;

  await redis.set(`zone:${name}`, JSON.stringify(zone));
  return zone;
}

export async function invalidateZone(name) {
  await redis.del(`zone:${name}`);
}
