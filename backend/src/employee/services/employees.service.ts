import { InjectRepository } from '@nestjs/typeorm';
// import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Employee } from '../entity/employee.entity';

export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
  ) {}

  findAll() {
    return this.employeesRepository.find();
  }
}
