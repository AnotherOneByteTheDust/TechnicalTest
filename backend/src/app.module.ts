import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { ConfigModule, ConfigService } from '@nestjs/config';
import { EmployeesModule } from './employee/employees.module';
import { Employee } from './employee/entity/employee.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'example',
      database: 'xaldigital',
      port: 5432,
      synchronize: true,
      entities: [Employee],
    }),
    EmployeesModule,
  ],
})
export class AppModule {}
