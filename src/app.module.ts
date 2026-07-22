import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { DatabaseModule } from './config/db.module';
import { CategoriaModule } from './categoria/categoria.module';
import { GastoModule } from './gasto/gasto.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    DatabaseModule,
    UsuarioModule,
    CategoriaModule,
    GastoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}