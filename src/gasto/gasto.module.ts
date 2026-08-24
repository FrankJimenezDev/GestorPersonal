import { Module } from '@nestjs/common';
import { GastoService } from './gasto.service';
import { GastoController } from './gasto.controller';
import { Categoria } from 'src/entities/categoria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gasto } from 'src/entities/gasto.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Gasto]),
  ],
  controllers: [GastoController],
  providers: [GastoService],
})
export class GastoModule { }
