import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('supplier')
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;
}

//TODO, terminar de hacer la entidad.
