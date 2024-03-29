import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  correo: string;

  @Column({ type: 'varchar', default: '' })
  username: string;

  @Column()
  password: string;

  @Column({ type: 'varchar', default: '' })
  roles: string[];
}

// { type: 'enum', enum: Role, default: Role.Usuario }
