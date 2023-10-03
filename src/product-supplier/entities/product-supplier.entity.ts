import { ProductHistory } from '../../product-history/entities/product-history.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('productSupplier')
export class ProductSupplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreProducto: string;

  @Column()
  cantidadAMano: number;

  @Column()
  cantidadContada: number;

  @Column({ type: 'varchar', default: '' })
  presentacion: string;

  @CreateDateColumn()
  fechaDeInventario: Date;

  @Column({ type: 'varchar', default: '' })
  nombreSupplier: string;

  @Column({ type: 'varchar', default: '' })
  nombreImage: string;

  /* @OneToMany(
    () => ProductHistory,
    (productHistory) => productHistory.productSupplier,
  )
  productHistory: ProductHistory[]; */
}
