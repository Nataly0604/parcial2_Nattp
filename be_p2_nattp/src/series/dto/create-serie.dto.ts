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
  @MinLength(4, { message: 'El campo titulo no debe ser menor a 4 caracteres' })
  readonly titulo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo sinopsis no debe ser vacío' })
  @IsString({ message: 'El campo sinopsis debe ser de tipo cadena' })
  @MaxLength(5000, { message: 'El campo sinopsis no debe ser mayor a 5000 caracteres' })
  @MinLength(8, { message: 'El campo sinopsis no debe ser menor a 8 caracteres' })
  readonly sinopsis: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo sinopsis no debe ser vacío' })
  @IsString({ message: 'El campo sinopsis debe ser de tipo cadena' })
  @MaxLength(500, { message: 'El campo sinopsis no debe ser mayor a 500 caracteres' })
  readonly tipoClasificacion: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo director no debe ser vacío' })
  @IsString({ message: 'El campo director debe ser de tipo cadena' })
  @MaxLength(100, { message: 'El campo director no debe ser mayor a 100 caracteres' })
  @MinLength(4, { message: 'El campo director no debe ser menor a 4 caracteres' })
  readonly director: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El campo sinopsis no debe ser vacío' })
  @IsNumber({}, { message: 'El campo sinopsis debe ser de tipo numérico' })
  readonly temporadas: number;

  @ApiProperty({ example: '2024-11-27' })
  @IsNotEmpty({ message: 'El campo fechaEstreno no debe ser vacío' })
  @IsDateString({}, { message: 'El campo fechaEstreno debe ser de tipo fecha' })
  readonly fechaEstreno: Date;
}
