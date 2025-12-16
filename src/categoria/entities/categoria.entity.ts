import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Produtos } from "../../produtos/entities/produto.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";


@Entity({name: "tb_categorias"})
export class Categoria {

@PrimaryGeneratedColumn()    
id: number;

@IsNotEmpty()
@Column({length: 255, nullable: false})
tipo: string;


@IsNotEmpty()
@Column({length: 300, nullable: false})
descricao: string;
 
@OneToMany(() => Produtos, (produtos) => produtos.categoria) 
   produtos: Produtos[];
    usuario: any;

 @OneToMany(() => Produtos, (produto) => produto.categoria)
    produto: Produtos[] 
    
}

  



