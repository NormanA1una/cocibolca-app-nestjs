import { Module } from '@nestjs/common';
import { SupplierModule } from './supplier/supplier.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express/multer';
import { ProductSupplierModule } from './product-supplier/product-supplier.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProductHistoryModule } from './product-history/product-history.module';

import { AppController } from './app.controller';

import { AppService } from './app.service';
import { DeleteFilesService } from './services/delete-files/delete-files.service';
import { ConfigService, ConfigModule } from '@nestjs/config/dist';

import { DataSource } from 'typeorm';
import { typeOrmConfig } from './config/typeorm.config';

import 'reflect-metadata';

import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles-guard.guard';
import { AuthGuard } from './auth/auth-guard.guard';

@Module({
  imports: [
    SupplierModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    MulterModule,
    ProductSupplierModule,
    ProductHistoryModule,
    AuthModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    DeleteFilesService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {
  constructor(
    private datasurce: DataSource,
    private configService: ConfigService,
  ) {}
}
