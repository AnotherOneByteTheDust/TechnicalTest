import { Controller, Get } from '@nestjs/common';
import { EmployeesService } from '../services/employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Get()
  listEmployees() {
    return this.employeesService.findAll();
  }
}
