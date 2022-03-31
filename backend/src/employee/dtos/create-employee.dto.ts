import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: "Pinky" })
  first_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: "Winky" })
  second_name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: "XalDigital" })
  company: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: "Tenerife" })
  address: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: "Santa Cruz" })
  city: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: "ES" })
  state: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ default: 12345 })
  zip: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: "1234-1234-1234" })
  phone1: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: "1234-1234-1234" })
  phone2: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ default: "test@mail.com" })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ default: "Marketing" })
  department: string;
}
