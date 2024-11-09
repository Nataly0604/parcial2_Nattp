import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InventariosService } from './inventarios.service';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('inventarios')
@Controller('inventarios')
export class InventariosController {
  constructor(private readonly inventariosService: InventariosService) {}

  @Post()
  create(@Body() createInventariosDto: CreateInventarioDto) {
    return this.inventariosService.create(createInventariosDto);
  }

  @Get()
  findAll() {
    return this.inventariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInventariosDto: UpdateInventarioDto) {
    return this.inventariosService.update(+id, updateInventariosDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventariosService.remove(+id);
  }
}
