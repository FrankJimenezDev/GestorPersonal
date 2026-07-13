import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: configService.getOrThrow<string>('DB_HOST'),
        port: configService.getOrThrow<number>('DB_PORT'),
        username: configService.getOrThrow<string>('POSTGRES_USER'),
        password: configService.getOrThrow<string>('POSTGRES_PASSWORD'),
        database: configService.getOrThrow<string>('POSTGRES_DB'),
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: ['query', 'schema', 'error'],
      });

      await dataSource.initialize();

      console.log(
        'Entidades:',
        dataSource.entityMetadatas.map(e => e.name),
      );

      return dataSource;
    },
  },
];
