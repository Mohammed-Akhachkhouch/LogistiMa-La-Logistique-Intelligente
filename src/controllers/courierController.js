import { Courier } from "../models/courier.js";

export async function createCourier(req, res) {
  const courier = await Courier.create(req.body);
  res.status(201).json(courier);
}
