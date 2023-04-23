import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from '../user/user.entry';

@Entity()
export class Log {
  @PrimaryColumn()
  id: number;

  @Column()
  methods: string;

  @Column()
  url: string;

  @Column({ select: true })
  code: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'userid' })
  user: User;
}
