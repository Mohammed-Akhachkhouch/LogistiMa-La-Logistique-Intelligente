import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

let sequelize;

const dbConfig = {
  dialect: 'postgres',
  logging: false,
};

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL, dbConfig);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME || 'logistima',
    process.env.DB_USER || 'postgres',
    process.env.DB_PASSWORD || 'postgres',
    {
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT || 5432,
      ...dbConfig
    }
  );
}

console.log("Using PostgreSQL database");

try {
  // Test connection
  await sequelize.authenticate();
  console.log("Database connected successfully");
} catch (err) {
  console.error("Database connection failed:", err.message);
  process.exit(1);
}

export { sequelize };
