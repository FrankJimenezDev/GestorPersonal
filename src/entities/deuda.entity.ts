import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('deuda')
export class Deuda {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    creditor: string;

    @Column()
    totalAmount: number;

    @Column()
    outStandingBalance: number;

    @Column()
    description: string;

    @Column()
    status: string;

    @Column()
    date: Date;
}