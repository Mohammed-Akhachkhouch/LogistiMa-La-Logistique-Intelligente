import { Router } from "express";
import { createCourier } from "../controllers/courierController.js";

const router = Router();

router.post("/couriers", createCourier);

export default router;
