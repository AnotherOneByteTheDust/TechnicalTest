import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 50})
  first_name: string;

  @Column({ type: 'varchar', length: 50})
  second_name: string;

  @Column({ type: 'varchar', length: 50})
  company: string;

  @Column({ type: 'varchar', length: 50})
  address: string;

  @Column({ type: 'varchar', length: 50})
  city: string;

  @Column({ type: 'char', length: 2})
  state: string;

  @Column({ type: 'int' })
  zip: number;

  @Column({ type: 'varchar', length: 15})
  phone1: string;

  @Column({ type: 'varchar', length: 15})
  phone2: string;

  @Column({ type: 'varchar', length: 50})
  email: string;

  @Column({ type: 'varchar', length: 50})
  department: string;
}
