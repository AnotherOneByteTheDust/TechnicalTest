import { InjectRepository } from '@nestjs/typeorm';
// import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateEmployeeDto, UpdateEmployeeDto } from '../dtos/employee.dto';
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
    return this.employeesRepository.findOneBy({ id });
  }

  create(employeeDto: CreateEmployeeDto) {
    return this.employeesRepository.save(employeeDto);
  }

  delete(id: number) {
    return this.employeesRepository.delete({ id });
  }

  async update(id: number, employeeDto: UpdateEmployeeDto) {
    const employee = await this.employeesRepository.findOneBy({ id });
    this.employeesRepository.merge(employee, employeeDto)
    return this.employeesRepository.save(employee)
  }
}
