import { Router } from "express";
import { createDelivery } from "../controllers/deliveryController.js";

const router = Router();

router.post("/deliveries", createDelivery);

export default router;
