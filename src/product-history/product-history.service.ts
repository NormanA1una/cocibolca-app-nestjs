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

  findAll() {
    return this.productHistoryRespository.find({
      order: {
        id: 'DESC',
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

  remove(id: number) {
    return this.productHistoryRespository.delete(id);
  }
}
