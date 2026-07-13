import { IsEmail, isEmail, IsNumber, IsString, MinLength } from "class-validator";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "./categoria.entity";
import { Deuda } from "./deuda.entity";
import { Gasto } from "./gasto.entity";
import { Ingreso } from "./ingreso..entity";

@Entity('usuario')
export class Usuario {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    @IsString()
    name: string;

    @Column()
    @IsString()
    lastName: string;

    @Column()
    @IsEmail()
    email: string;

    @Column()
    @IsString()
    @MinLength(8)
    password: string;

    @Column()
    @IsNumber() 
    age : number;

    @Column()
    @IsString()
    country : string;

    @Column()
    verified: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Categoria, categoria => categoria.id)
    category: Categoria[];

    @OneToMany(() => Deuda, deuda => deuda.id)
    debts: Deuda[];

    @OneToMany(() => Gasto, gasto => gasto.id)
    expenses: Gasto[];

    @OneToMany(() => Ingreso, ingreso => ingreso.id)
    income: Ingreso[];
}
