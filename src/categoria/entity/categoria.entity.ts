import { IsNotEmpty } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "tb_categorias"})
export class Categoria {

@PrimaryGeneratedColumn()    
id: number

@IsNotEmpty()
@Column({length: 255, nullable: false})
tipo: string


@IsNotEmpty()
@Column({length: 300, nullable: false})
descricao: string
    
}