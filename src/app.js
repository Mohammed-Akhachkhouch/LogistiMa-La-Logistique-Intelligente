import express from "express";
import courierRoutes from "./routes/courierRoutes.js";
import deliveryRoutes from "./routes/deliveryRoutes.js";

const app = express();
app.use(express.json());
app.use(courierRoutes);
app.use(deliveryRoutes);

export default app;
