import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductSupplierService } from './product-supplier.service';
import { CreateProductSupplierDto } from './dto/create-product-supplier.dto';
import { UpdateProductSupplierDto } from './dto/update-product-supplier.dto';
import { Public } from 'src/decorators/is-public/is-public.decorator';

@Controller('product-supplier')
export class ProductSupplierController {
  constructor(
    private readonly productSupplierService: ProductSupplierService,
  ) {}

  @Post()
  create(@Body() createProductSupplierDto: CreateProductSupplierDto) {
    console.log(createProductSupplierDto);

    return this.productSupplierService.create(createProductSupplierDto);
  }

  @Get()
  findAll() {
    return this.productSupplierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productSupplierService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductSupplierDto: UpdateProductSupplierDto,
  ) {
    return this.productSupplierService.update(+id, updateProductSupplierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productSupplierService.remove(+id);
  }
}
