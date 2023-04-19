import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm';
import { Log } from '../log/log.entry';

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;

  @OneToMany(() => Log, (log) => log.user)
  log: Log;
}
