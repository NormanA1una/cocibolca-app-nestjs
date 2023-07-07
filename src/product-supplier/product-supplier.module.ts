import { Module } from '@nestjs/common';
import { ProductSupplierService } from './product-supplier.service';
import { ProductSupplierController } from './product-supplier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSupplier } from './entities/product-supplier.entity';
import { DeleteFilesService } from 'src/services/delete-files/delete-files.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductSupplier])],
  controllers: [ProductSupplierController],
  providers: [ProductSupplierService, DeleteFilesService],
})
export class ProductSupplierModule {}
