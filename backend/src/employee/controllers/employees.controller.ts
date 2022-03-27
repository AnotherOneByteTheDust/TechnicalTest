import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateEmployeeDto } from '../dtos/create-employee.dto';
import { EmployeesService } from '../services/employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Get()
  listEmployees() {
    return this.employeesService.findAll();
  }

  @Post()
  createEmployee(@Body() body: CreateEmployeeDto) {
    return this.employeesService.create(body);
  }
}
