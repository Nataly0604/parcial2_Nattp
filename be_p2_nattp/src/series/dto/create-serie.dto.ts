import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateSerieDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo titulo no debe ser vacío' })
  @IsString({ message: 'El campo titulo debe ser de tipo cadena' })
  @MaxLength(250, { message: 'El campo titulo no debe ser mayor a 250 caracteres' })
  @MinLength(3, { message: 'El campo titulo no debe ser menor a 3 caracteres' })
  readonly titulo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo sinopsis no debe ser vacío' })
  @IsString({ message: 'El campo sinopsis debe ser de tipo cadena' })
  @MaxLength(5000, { message: 'El campo sinopsis no debe ser mayor a 5000 caracteres' })
  @MinLength(10, { message: 'El campo sinopsis no debe ser menor a 10 caracteres' })
  readonly sinopsis: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo director no debe ser vacío' })
  @IsString({ message: 'El campo director debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo director no debe ser mayor a 100 caracteres' })
  @MinLength(3, { message: 'El campo director no debe ser menor a 3 caracteres' })
  readonly director: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo categoria no debe ser vacío' })
  @IsString({ message: 'El campo categoria debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo categoria no debe ser mayor a 100 caracteres' })
  @MinLength(3, { message: 'El campo categoria no debe ser menor a 3 caracteres' })
  readonly categoria: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo sinopsis no debe ser vacío' })
  @IsNumber({}, { message: 'El campo sinopsis debe ser de tipo numérico' })
  readonly temporadas: number;

  @ApiProperty({ example: '2024-04-13' })
  @IsNotEmpty({ message: 'El campo fechaEstreno no debe ser vacío' })
  @IsDateString({}, { message: 'El campo fechaEstreno debe ser de tipo fecha' })
  readonly fechaEstreno: Date;
}
