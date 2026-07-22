import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categoria } from 'src/entities/categoria.entity';

@Injectable()
export class CategoriaService {

  constructor(
    @InjectRepository(Categoria)
    private readonly categoriaRepository: Repository<Categoria>,
  ) { }

  async create(createCategoriaDto: CreateCategoriaDto) {

    const categoria = this.categoriaRepository.create({
      name: createCategoriaDto.name,
      type: createCategoriaDto.type,
      usuario: {
        id: createCategoriaDto.usuarioId
      }
    });
    await this.categoriaRepository.save(categoria);
    return `La categoría ${categoria.name} ha sido creada exitosamente.`;

  }

  findAll() {
    const categories = this.categoriaRepository.find();
    return categories;
  }

  findOne(id: number) {
    return `This action returns a #${id} categoria`;
  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {

    const category = await this.categoriaRepository.findOne({
      where: { id },
    });

    if (!category) {
      throw new Error(`Categoria with id ${id} not found`);
    }

    this.categoriaRepository.merge(category, updateCategoriaDto);
    await this.categoriaRepository.save(category);

    return `Categoria ${category.name} actualizada correctamente`;
  }

  remove(id: number) {
    this.categoriaRepository.delete(id);
    return `Categoria eliminada correctamente`;
  }
}
