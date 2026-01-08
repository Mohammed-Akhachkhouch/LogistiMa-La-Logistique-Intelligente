import app from "./app.js";
import { sequelize } from "./config/database.js";
import "./models/courier.js";
import "./models/delivery.js";

await sequelize.sync({ alter: true });

app.listen(3000, () => console.log("API running"));
