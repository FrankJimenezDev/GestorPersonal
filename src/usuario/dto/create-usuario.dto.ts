import { IsEmail, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateUsuarioDto {

  @IsString()
  name!: string;

  @IsString()
  lastName!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(8)
  password!: string;

  @IsNumber()
  age!: number;

  @IsString()
  country!: string;
}