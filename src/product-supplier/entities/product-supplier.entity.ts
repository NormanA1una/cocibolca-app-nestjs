import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('productSupplier')
export class ProductSupplier {
  @PrimaryGeneratedColumn()
  id: number;

  /* @Column()
  supplier_id: number; */

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
}
