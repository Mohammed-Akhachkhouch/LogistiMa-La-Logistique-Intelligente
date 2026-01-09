import { sequelize } from "../config/db.js";
import { Courier } from "../models/courier.js";
import { Op } from "sequelize";

export async function assignCourier() {
  return sequelize.transaction(async (t) => {
    const courier = await Courier.findOne({
      where: {
        capacity: {
          [Op.gt]: 0
        }
      },
      lock: t.LOCK.UPDATE,
      transaction: t
    });

    if (!courier) {
      throw new Error("NO_COURIER_AVAILABLE");
    }

    courier.capacity -= 1;
    await courier.save({ transaction: t });

    return courier;
  });
}
