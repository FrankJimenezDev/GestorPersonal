import { IsString } from "class-validator";

export class CreateCategoriaDto {

    @IsString()
    name!: string;

    @IsString()
    type!: string;

    @IsString()
    usuarioId!: string;
}
