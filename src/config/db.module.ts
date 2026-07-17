import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Categoria } from 'src/entities/categoria.entity';
import { Deuda } from 'src/entities/deuda.entity';
import { Gasto } from 'src/entities/gasto.entity';
import { Ingreso } from 'src/entities/ingreso..entity';
import { Usuario } from 'src/entities/usuario.entity';
import { Pago } from 'src/entities/pago.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.getOrThrow<string>('DB_HOST'),
        port: config.getOrThrow<number>('DB_PORT'),
        username: config.getOrThrow<string>('POSTGRES_USER'),
        password: config.getOrThrow<string>('POSTGRES_PASSWORD'),
        database: config.getOrThrow<string>('POSTGRES_DB'),
        entities: [
          Usuario,
          Categoria,
          Gasto,
          Ingreso,
          Deuda,
          Pago
        ],
        synchronize: true,
        logging: ['query', 'schema', 'error'],
      }),
    }),
  ],
})
export class DatabaseModule { }