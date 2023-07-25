import { Module } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { SupplierController } from './supplier.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { DeleteFilesService } from 'src/services/delete-files/delete-files.service';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/auth/roles-guard.guard';

@Module({
  imports: [TypeOrmModule.forFeature([Supplier])],
  controllers: [SupplierController],
  providers: [SupplierService, DeleteFilesService],
})
export class SupplierModule {}
