import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SupplierModule } from './supplier/supplier.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { ConfigService, ConfigModule } from '@nestjs/config/dist';
import { MulterModule } from '@nestjs/platform-express/multer';
import 'reflect-metadata';

@Module({
  imports: [
    SupplierModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    MulterModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(
    private datasurce: DataSource,
    private configService: ConfigService,
  ) {}
}
