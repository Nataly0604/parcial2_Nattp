import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { Serie } from './entities/serie.entity';

@Injectable()
export class SeriesService {
  constructor(@InjectRepository(Serie) private seriesRepository: Repository<Serie>) {}

  async create(createSerieDto: CreateSerieDto): Promise<Serie> {
    const existe = await this.seriesRepository.findOneBy({
      titulo: createSerieDto.titulo.trim(),
    });

    if (existe) {
      throw new ConflictException('La serie ya existe');
    }

    return this.seriesRepository.save({
      titulo: createSerieDto.titulo.trim(),
      sinopsis: createSerieDto.sinopsis.trim(),
      director: createSerieDto.director.trim(),
      categoria: createSerieDto.director.trim(),
      temporadas: createSerieDto.temporadas,
      fechaEstreno: createSerieDto.fechaEstreno,
    });
  }

  async findAll(): Promise<Serie[]> {
    return this.seriesRepository.find();
  }

  async findOne(id: number): Promise<Serie> {
    const serie = await this.seriesRepository.findOneBy({ id });
    if (!serie) {
      throw new NotFoundException(`La serie ${id} no existe`);
    }
    return serie;
  }

  async update(id: number, updateSerieDto: UpdateSerieDto): Promise<Serie> {
    const serie = await this.findOne(id);
    const serieUpdate = Object.assign(serie, updateSerieDto);
    return this.seriesRepository.save(serieUpdate);
  }

  async remove(id: number) {
    const serie = await this.findOne(id);
    return this.seriesRepository.delete(serie.id);
  }
}
