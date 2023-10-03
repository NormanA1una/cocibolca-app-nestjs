import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('supplier')
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombreProveedor: string;

  @Column()
  tipoDeProducto: string;

  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @Column({ type: 'varchar', default: '' })
  logo: string;

  @Column({ type: 'varchar', default: '' })
  nombreImage: string;
}
