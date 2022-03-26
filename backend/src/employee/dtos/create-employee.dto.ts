import { IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  first_name: string;
}
