import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateInventarioDto {
  @ApiProperty()
  @IsNotEmpty({ message: 'El campo ladrillo no debe ser vacío' })
  @IsString({ message: 'El campo ladrillo debe ser de tipo cadena' })
  @MaxLength(250, { message: 'El campo ladrillo no debe ser mayor a 250 caracteres' })
  @MinLength(3, { message: 'El campo ladrillo no debe ser menor a 3 caracteres' })
  readonly ladrillo: string;
}
