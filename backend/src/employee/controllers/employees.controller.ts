import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateEmployeeDto, UpdateEmployeeDto } from '../dtos/employee.dto';
import { EmployeesService } from '../services/employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) { }

  @Get()
  listEmployees() {
    return this.employeesService.findAll();
  }

  @Get('/:id')
  getEmployee(@Param('id', ParseIntPipe) id: number) {
    return this.employeesService.findOne(id);
  }

  @Post()
  createEmployee(@Body() body: CreateEmployeeDto) {
    return this.employeesService.create(body);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateEmployeeDto
  ) {
    return this.employeesService.update(id, body);
  }

  @Delete('/:id')
  deleteEmployee(@Param('id', ParseIntPipe) id: number,
  ) {
    return this.employeesService.delete(id);
  }
}
