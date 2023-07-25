import {
  Column,
  CreateDateColumn,
  Entity,
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

  @Column({ type: 'varchar', default: '' })
  nombreSupplier: string;
}
