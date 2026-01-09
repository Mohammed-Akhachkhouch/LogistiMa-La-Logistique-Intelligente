import { Delivery } from "../models/delivery.js";
import { assignCourier } from "../services/dispatcherService.js";
import { deliveryQueue } from "../queues/deliveryQueue.js";

export async function createDelivery(req, res) {
  try {
    const delivery = await Delivery.create();

    const courier = await assignCourier();

    await delivery.update({
      status: "ASSIGNED",
      courierId: courier.id
    });

    await deliveryQueue.add("process", {
      deliveryId: delivery.id
    });

    res.status(201).json(delivery);
  } catch (err) {
    res.status(409).json({ error: "No courier available" });
  }
}
