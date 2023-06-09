import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  correo: string;

  @Column({ type: 'varchar', default: '' })
  nombreYApellidos: string;

  @Column()
  password: string;
}
