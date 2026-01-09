import dotenv from 'dotenv';
dotenv.config();

console.log('Testing PostgreSQL connection...');
console.log('DB_URL:', process.env.DB_URL);
console.log('ENABLE_REAL_DB:', process.env.ENABLE_REAL_DB);

try {
  const { Sequelize } = await import('sequelize');
  
  const sequelize = new Sequelize(process.env.DB_URL, {
    logging: true,
    dialect: 'postgres'
  });
  
  await sequelize.authenticate();
  console.log('✅ PostgreSQL connection successful!');
  
  // Test creating tables
  await sequelize.getQueryInterface().showAllTables().then(tables => {
    console.log('Tables:', tables);
  });
  
  await sequelize.close();
} catch (error) {
  console.error('❌ PostgreSQL connection failed:', error.message);
  console.error('Full error:', error);
}
