import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.entity";
import { Ingreso } from "./ingreso..entity";
import { Gasto } from "./gasto.entity";

@Entity('categoria')
export class Categoria {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    type!: string;

    @OneToMany(() => Gasto, gasto => gasto.categoria)
    gastos!: Gasto[];

    @OneToMany(() => Ingreso, ingreso => ingreso.categoria)
    ingresos!: Ingreso[];

    @ManyToOne(() => Usuario, usuario => usuario.categories)
    usuario!: Usuario;

}