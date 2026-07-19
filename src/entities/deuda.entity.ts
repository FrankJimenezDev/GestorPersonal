import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Usuario } from "./usuario.entity";
import { Pago } from "./pago.entity";

@Entity('deuda')
export class Deuda {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    creditor!: string;

    @Column()
    totalAmount!: number;

    @Column()
    description!: string;

    @Column()
    status!: string;

    @Column()
    isActive: boolean;
    
    @Column()
    date!: Date;

    @OneToMany(() => Pago, pago => pago.deuda)
    pagos!: Pago[];

    @ManyToOne(() => Usuario, usuario => usuario.debts)
    @JoinColumn({ name: 'usuarioId' })
    usuario!: Usuario;

}