import { sequelize } from './src/config/db.js';
import { Courier } from './src/models/courier.js';
import { Delivery } from './src/models/delivery.js';

async function checkTables() {
  try {
    console.log('Checking database tables...');
    
    // Get table info
    const tables = await sequelize.getQueryInterface().showAllTables();
    console.log('Tables in database:', tables);
    
    // Check if tables have data
    if (tables.includes('couriers')) {
      const courierCount = await Courier.count();
      console.log(`Couriers table has ${courierCount} records`);
    }
    
    if (tables.includes('deliveries')) {
      const deliveryCount = await Delivery.count();
      console.log(`Deliveries table has ${deliveryCount} records`);
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await sequelize.close();
  }
}

checkTables();
