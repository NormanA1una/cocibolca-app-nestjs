import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { EnumStatus } from '../Enums/enums.product';

@Entity('product')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  supplier_id: number;

  @Column()
  title: string;

  @Column()
  image: string;

  @Column()
  presentation: string;

  @Column({ type: 'enum', enum: EnumStatus, default: EnumStatus.pedido })
  order_status: EnumStatus;
}
