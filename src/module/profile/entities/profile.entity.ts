import { User } from 'src/module/user/user.entry';
import { Entity, Column, PrimaryColumn, OneToOne } from 'typeorm';

@Entity()
export class Profile {
  @PrimaryColumn()
  id: number;

  @Column()
  brith: string;

  @Column()
  qq: string;

  @OneToOne(() => User)
  user: User;
}
