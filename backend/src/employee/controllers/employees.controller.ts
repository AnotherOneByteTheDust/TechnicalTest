import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateEmployeeDto } from '../dtos/create-employee.dto';
import { EmployeesService } from '../services/employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Get()
  listEmployees() {
    return this.employeesService.findAll();
  }

  @Get('/:id')
  getEmployee(@Param('id') id: string) {
    return this.employeesService.findOne(parseInt(id));
  }

  @Post()
  createEmployee(@Body() body: CreateEmployeeDto) {
    return this.employeesService.create(body);
  }
}
