import { Router } from "express";
import { createCourier } from "../controllers/courier.controller.js";

const router = Router();

router.post("/couriers", createCourier);

export default router;
