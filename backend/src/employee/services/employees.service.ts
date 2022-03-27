import { InjectRepository } from '@nestjs/typeorm';
// import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEmployeeDto } from '../dtos/create-employee.dto';
import { Employee } from '../entity/employee.entity';

export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeesRepository: Repository<Employee>,
  ) {}

  findAll() {
    return this.employeesRepository.find();
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.employeesRepository.findOneBy({ id });
  }

  create(employeeDto: CreateEmployeeDto) {
    return this.employeesRepository.save(employeeDto);
  }
}
