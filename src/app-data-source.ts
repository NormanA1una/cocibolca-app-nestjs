import { DataSource } from 'typeorm';
import { ProductSupplier } from './product-supplier/entities/product-supplier.entity';
import { Supplier } from './supplier/entities/supplier.entity';

require('dotenv').config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [ProductSupplier, Supplier],
  synchronize: true,
});

AppDataSource.initialize()
  .then(() => {
    console.log('Data source has been initialized');
  })
  .catch((err) => {
    console.log('Error during Data Source initializacion', err);
  });
