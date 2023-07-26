import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductHistoryDto } from './dto/create-product-history.dto';
import { UpdateProductHistoryDto } from './dto/update-product-history.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductHistory } from './entities/product-history.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductHistoryService {
  constructor(
    @InjectRepository(ProductHistory)
    private productHistoryRespository: Repository<ProductHistory>,
  ) {}

  create(createProductHistoryDto: CreateProductHistoryDto) {
    return this.productHistoryRespository.save(createProductHistoryDto);
  }

  insert(product: ProductHistory) {
    console.log(product);

    return this.productHistoryRespository.insert(product);
  }

  findAll(product_id: number) {
    return this.productHistoryRespository.find({
      where: {
        product_id: product_id,
      },
      order: {
        id: 'DESC',
      },
      relations: {
        productSupplier: true,
      },
    });
  }

  async findOne(id: number) {
    const productHistory = await this.productHistoryRespository.findOne({
      where: {
        id: id,
      },
    });

    if (!productHistory) {
      throw new NotFoundException('No hay historial que mostrar');
    }

    return productHistory;
  }

  update(id: number, updateProductHistoryDto: UpdateProductHistoryDto) {
    return this.productHistoryRespository.update(id, updateProductHistoryDto);
  }

  remove(product_id: number) {
    return this.productHistoryRespository.delete({
      product_id: product_id,
    });
  }
}
