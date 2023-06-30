import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Supplier } from './entities/supplier.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(Supplier)
    private supplierRepository: Repository<Supplier>,
  ) {}

  create(createSupplierDto: CreateSupplierDto) {
    return this.supplierRepository.save(createSupplierDto);
  }

  findAll() {
    return this.supplierRepository.find({
      order: {
        id: 'DESC',
      },

      /* take: 2,
      skip: 2, */
    });
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

  remove(id: number) {
    return this.supplierRepository.delete(id);
  }
}
