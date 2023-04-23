import { Entity, Column, PrimaryColumn, ManyToMany } from 'typeorm';
import { User } from '../user/user.entry';

@Entity()
export class Rule {
  @PrimaryColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => User, (user) => user.rules)
  users: User[];
}
