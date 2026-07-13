import { IsNumber } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('pago')
export class Pago {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsNumber()
    amount: number;

    @Column()
    description: string;

    @Column()
    date: Date;
}