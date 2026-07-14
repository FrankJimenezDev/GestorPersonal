import { IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Deuda } from "./deuda.entity";

@Entity('pago')
export class Pago {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    amount: number;

    @Column()
    description: string;

    @Column()
    date: Date;

    @ManyToOne(() => Deuda, deuda => deuda.pagos)
    deuda: Deuda;
}