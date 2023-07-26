import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ProductHistoryService } from './product-history.service';
import { CreateProductHistoryDto } from './dto/create-product-history.dto';
import { UpdateProductHistoryDto } from './dto/update-product-history.dto';
import { Roles } from 'src/decorators/roles/roles.decorator';
import { Role } from 'src/user/role.enum';

@Controller('product-history')
export class ProductHistoryController {
  constructor(private readonly productHistoryService: ProductHistoryService) {}

  @Post()
  create(@Body() createProductHistoryDto: CreateProductHistoryDto) {
    return this.productHistoryService.create(createProductHistoryDto);
  }

  @Get(':id')
  findAll(@Param('id') product_id: string) {
    return this.productHistoryService.findAll(+product_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productHistoryService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductHistoryDto: UpdateProductHistoryDto,
  ) {
    return this.productHistoryService.update(+id, updateProductHistoryDto);
  }

  @Delete(':product_id')
  @Roles(Role.Admin)
  remove(@Param('product_id') id: string) {
    return this.productHistoryService.remove(+id);
  }
}
