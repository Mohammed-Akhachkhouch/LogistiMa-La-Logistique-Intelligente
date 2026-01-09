import { sequelize } from './src/config/db.js';
import { Courier } from './src/models/courier.js';
import { Delivery } from './src/models/delivery.js';

async function showDatabaseStructure() {
  try {
    console.log('=== DATABASE STRUCTURE ===');
    console.log('Database file:', sequelize.options.storage);
    console.log('\n=== TABLES ===');
    
    const tables = await sequelize.getQueryInterface().showAllTables();
    console.log('Tables:', tables);
    
    for (const tableName of tables) {
      console.log(`\n--- ${tableName.toUpperCase()} TABLE STRUCTURE ---`);
      const columns = await sequelize.getQueryInterface().describeTable(tableName);
      Object.entries(columns).forEach(([columnName, columnInfo]) => {
        console.log(`  ${columnName}: ${columnInfo.type}${columnInfo.allowNull ? ' (nullable)' : ' (required)'}`);
      });
    }
    
    console.log('\n=== SAMPLE DATA ===');
    if (tables.includes('couriers')) {
      const couriers = await Courier.findAll();
      console.log(`Couriers (${couriers.length} records):`);
      couriers.forEach(courier => {
        console.log(`  ID: ${courier.id}, Name: ${courier.name}, Capacity: ${courier.capacity}`);
      });
    }
    
    if (tables.includes('deliveries')) {
      const deliveries = await Delivery.findAll();
      console.log(`Deliveries (${deliveries.length} records):`);
      deliveries.forEach(delivery => {
        console.log(`  ID: ${delivery.id}, Status: ${delivery.status}, Courier ID: ${delivery.courierId}`);
      });
    }
    
  } catch (error) {
    console.error('Error:', error.message);
  } finally {
    await sequelize.close();
  }
}

showDatabaseStructure();
