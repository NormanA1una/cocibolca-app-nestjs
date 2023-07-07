import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  DataSource,
} from 'typeorm';

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
}
