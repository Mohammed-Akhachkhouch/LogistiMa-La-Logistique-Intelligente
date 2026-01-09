import app from "./app.js";
import { sequelize } from "./config/db.js";
import "./models/courier.js";
import "./models/delivery.js";
import "./models/zone.js";

await sequelize.sync({ alter: true });

const PORT = process.env.PORT || 0; // 0 means auto-assign available port
const server = app.listen(PORT, () => {
  const actualPort = server.address().port;
  console.log(`API running on port ${actualPort}`);
});
