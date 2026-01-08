import express from "express";
import courierRoutes from "./routes/courier.routes.js";
import deliveryRoutes from "./routes/delivery.routes.js";

const app = express();
app.use(express.json());
app.use(courierRoutes);
app.use(deliveryRoutes);

export default app;
