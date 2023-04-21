import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('supplier')
export class Supplier {
  @PrimaryGeneratedColumn()
  id: number;
}

//TODO, terminar de hacer la entidad.
