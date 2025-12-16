import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity ({name: "tb_produtos"})
export class Produtos {

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao: string

    @IsNotEmpty()
    @Column({type: 'int', nullable: false})
    quantidade: number;

    @IsNotEmpty()
    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    preco: string;

    @UpdateDateColumn()
    validade: Date

      @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
        onDelete: 'CASCADE'
    })
    categoria: Categoria

}  