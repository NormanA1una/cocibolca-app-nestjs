import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductSupplierDto } from './dto/create-product-supplier.dto';
import { UpdateProductSupplierDto } from './dto/update-product-supplier.dto';
import { ProductSupplier } from './entities/product-supplier.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { AppDataSource } from 'src/app-data-source';
import { DeleteFilesService } from 'src/services/delete-files/delete-files.service';

@Injectable()
export class ProductSupplierService {
  constructor(
    @InjectRepository(ProductSupplier)
    private productSuplierRepository: Repository<ProductSupplier>,
    private deleteFileService: DeleteFilesService,
  ) {}

  dataSource = AppDataSource;

  create(createProductSupplierDto: CreateProductSupplierDto) {
    return this.productSuplierRepository.save(createProductSupplierDto);
  }

  findAll() {
    return this.productSuplierRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  async findOne(id: number) {
    const productSupplier = await this.productSuplierRepository.findOne({
      where: {
        id: id,
      },
    });

    if (!productSupplier) {
      throw new NotFoundException('El producto no existe');
    }

    return productSupplier;
  }

  update(id: number, updateProductSupplierDto: UpdateProductSupplierDto) {
    return this.productSuplierRepository.update(id, updateProductSupplierDto);
  }

  async remove(id: number) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.startTransaction();

    try {
      const product = await queryRunner.manager.findOne(ProductSupplier, {
        where: {
          id: id,
        },
      });

      await queryRunner.manager.delete(ProductSupplier, id);
      await this.deleteFileService.deleteProductImg(product.presentacion);

      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }

    // return this.productSuplierRepository.delete(id);
  }
}
