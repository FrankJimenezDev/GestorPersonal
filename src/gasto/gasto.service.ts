import { Injectable } from '@nestjs/common';
import { CreateGastoDto } from './dto/create-gasto.dto';
import { UpdateGastoDto } from './dto/update-gasto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gasto } from 'src/entities/gasto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GastoService {

  constructor(
    @InjectRepository(Gasto)
    private readonly gastoRepository: Repository<Gasto>,
  ){}

  async create(createGastoDto: CreateGastoDto) {
  const gasto = this.gastoRepository.create({
    amount: createGastoDto.amount,
    description: createGastoDto.description,
    date: createGastoDto.date,
    categoria: { id: createGastoDto.categoria },
    usuario: { id: createGastoDto.usuarioId },
  });

  await this.gastoRepository.save(gasto);
  return `Gasto registrado exitosamente.`;
}

  findAll() {
    return `This action returns all gasto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gasto`;
  }

  async update(id: number, updateGastoDto: UpdateGastoDto) {
    const gasto = await this.gastoRepository.findOne({
      where: { id },
    });

    if (!gasto) {
      throw new Error(`Gasto with id ${id} not found`);
    }

    this.gastoRepository.merge(gasto, {
      description: updateGastoDto.description,
      amount: updateGastoDto.amount,
      date: updateGastoDto.date,
      categoria: { id: updateGastoDto.categoria }
    });
    await this.gastoRepository.save(gasto);

    return `Gasto ${gasto.description} actualizado correctamente`;
  }

  remove(id: number) {
    return `This action removes a #${id} gasto`;
  }
}
