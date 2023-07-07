import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { Repository } from 'typeorm';
import { AppDataSource } from 'src/app-data-source';

import { DeleteFilesService } from 'src/services/delete-files/delete-files.service';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private supplierRepository: Repository<Supplier>,
    private deleteFileService: DeleteFilesService,
  ) {}

  dataSource = AppDataSource;

  create(createSupplierDto: CreateSupplierDto) {
    return this.supplierRepository.save(createSupplierDto);
  }

  findAll() {
    return AppDataSource.manager.find(Supplier, {
      order: {
        id: 'DESC',
      },
    });

    /* return this.supplierRepository.find({
      order: {
        id: 'DESC',
      },
    }); */
  }

  async findOne(id: number) {
    const supplier = await this.supplierRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!supplier) {
      throw new NotFoundException('El Proveedor no existe.');
    }
    return supplier;
  }

  update(id: number, updateSupplierDto: UpdateSupplierDto) {
    return this.supplierRepository.update(id, updateSupplierDto);
  }

  async remove(id: number) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.startTransaction();

    try {
      const supplier = await queryRunner.manager.findOne(Supplier, {
        where: { id: id },
      });
      await queryRunner.manager.delete(Supplier, id),
        await this.deleteFileService.deleteFile(supplier.logo);

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    // return this.supplierRepository.delete(id);
  }
}
