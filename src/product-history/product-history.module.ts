import { Module } from '@nestjs/common';
import { ProductHistoryService } from './product-history.service';
import { ProductHistoryController } from './product-history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductHistory } from './entities/product-history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductHistory])],
  controllers: [ProductHistoryController],
  providers: [ProductHistoryService],
  exports: [ProductHistoryService],
})
export class ProductHistoryModule {}
