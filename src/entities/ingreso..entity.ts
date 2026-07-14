import { IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.entity";
import { Categoria } from "./categoria.entity";

@Entity('ingreso')
export class Ingreso {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    description: string;

    @Column()
    date: Date;

    @ManyToOne(() => Categoria, categoria => categoria.ingresos)
    categoria: Categoria;

    @ManyToOne(() => Usuario, usuario => usuario.income)
    usuario: Usuario;
}