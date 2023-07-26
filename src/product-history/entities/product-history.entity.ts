import { ProductSupplier } from 'src/product-supplier/entities/product-supplier.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('productHistory')
export class ProductHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  product_id: number;

  @Column()
  nombreProducto: string;

  @Column()
  cantidadAMano: number;

  @Column()
  cantidadContada: number;

  @CreateDateColumn()
  fechaDeInventario: Date;

  @Column()
  nombreSupplier: string;

  @ManyToOne(() => ProductSupplier, (productSupplier) => productSupplier.id)
  productSupplier: ProductSupplier;
}
