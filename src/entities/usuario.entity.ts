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
    name: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    age : number;

    @Column()
    country : string;

    @Column()
    verified: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Categoria, categoria => categoria.usuario)
    categoris: Categoria[];

    @OneToMany(() => Deuda, deuda => deuda.usuario)
    debts: Deuda[];

    @OneToMany(() => Gasto, gasto => gasto.usuario)
    expenses: Gasto[];

    @OneToMany(() => Ingreso, ingreso => ingreso.usuario)
    income: Ingreso[];
}
