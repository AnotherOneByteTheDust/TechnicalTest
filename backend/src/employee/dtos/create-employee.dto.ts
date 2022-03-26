import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  first_name: string;

  @IsString()
  second_name: string;

  @IsString()
  company: string;

  @IsString()
  address: string;

  @IsString()
  city: string;

  @IsString()
  state: string;

  @IsNumber()
  zip: number;

  @IsEmail()
  email: string;

  @IsString()
  department: string;
}
