import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { Inventario } from './entities/inventario.entity';

@Injectable()
export class InventariosService {
  constructor(@InjectRepository(Inventario) private inventariosRepository: Repository<Inventario>) {}

  async create(createInventarioDto: CreateInventarioDto): Promise<Inventario> {
    const existe = await this.inventariosRepository.findOneBy({
      ladrillo: createInventarioDto.ladrillo.trim(),
    });

    if (existe) {
      throw new ConflictException('La inventario ya existe');
    }

    return this.inventariosRepository.save({
      ladrillo: createInventarioDto.ladrillo.trim(),
    });
  }

  async findAll(): Promise<Inventario[]> {
    return this.inventariosRepository.find();
  }

  async findOne(id: number): Promise<Inventario> {
    const inventario = await this.inventariosRepository.findOneBy({ id });
    if (!inventario) {
      throw new NotFoundException(`La inventario ${id} no existe`);
    }
    return inventario;
  }

  async update(id: number, updateInventarioDto: UpdateInventarioDto): Promise<Inventario> {
    const inventario = await this.findOne(id);
    const inventarioUpdate = Object.assign(inventario, updateInventarioDto);
    return this.inventariosRepository.save(inventarioUpdate);
  }

  async remove(id: number) {
    const inventario = await this.findOne(id);
    return this.inventariosRepository.delete(inventario.id);
  }
}
