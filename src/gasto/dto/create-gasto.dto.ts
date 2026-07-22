import { IsDate, IsNumber, IsString } from "class-validator";

export class CreateGastoDto {

    @IsNumber()
    amount: number;

    @IsString()
    description: string;

    @IsString()
    categoria: number;

    @IsDate()
    date: Date;

    @IsString()
    usuarioId: string;
}
