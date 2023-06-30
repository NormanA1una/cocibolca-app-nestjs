import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductSupplierDto } from './dto/create-product-supplier.dto';
import { UpdateProductSupplierDto } from './dto/update-product-supplier.dto';
import { ProductSupplier } from './entities/product-supplier.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductSupplierService {
  constructor(
    @InjectRepository(ProductSupplier)
    private productSuplierRepository: Repository<ProductSupplier>,
  ) {}

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

  remove(id: number) {
    return this.productSuplierRepository.delete(id);
  }
}
