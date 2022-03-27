import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string;

  @Column()
  second_name: string;

  @Column()
  company: string;

  @Column()
  address: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  zip: number;

  @Column()
  phone1: string;

  @Column()
  phone2: string;

  @Column()
  email: string;

  @Column()
  department: string;
}
