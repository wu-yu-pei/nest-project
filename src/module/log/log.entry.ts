import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { User } from '../user/user.entry';

@Entity()
export class Log {
  @PrimaryColumn()
  id: number;

  @Column()
  methods: string;

  @Column()
  url: string;

  @Column()
  code: number;

  @ManyToOne(() => User, (user) => user.log)
  user: User;
}
