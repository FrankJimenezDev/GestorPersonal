import { PartialType } from '@nestjs/mapped-types';
import { CreateGastoDto } from './create-gasto.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateGastoDto extends PartialType(CreateGastoDto) {

    @IsNumber()
    amount: number;

    @IsString()
    description: string;

    @IsNumber()
    categoria: number;

}
