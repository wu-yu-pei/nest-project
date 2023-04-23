import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Log } from '../log/log.entry';
import { Rule } from '../rule/rule.entry';
import { Profile } from '../profile/entities/profile.entity';

@Entity()
export class User {
  @PrimaryColumn()
  id: number;

  @Column()
  firstName: string;

  @Column({
    nullable: true,
  })
  age: number;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;

  @ManyToMany(() => Rule, (rule) => rule.users)
  @JoinTable({ name: 'user_rule' })
  rules: Rule[];

  @OneToMany(() => Log, (log) => log.user)
  logs: Log[];

  @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile;
}
