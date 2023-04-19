import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Rule {
  @PrimaryColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  isActive: boolean;
}
