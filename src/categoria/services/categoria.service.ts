import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ILike, Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";
import { Categoria } from "../entities/categoria.entity";
import { ProdutosService } from "../../produtos/services/produto.service";

@Injectable()
export class CategoriaService {
    constructor(
        @InjectRepository(Categoria)
        private categoriaRepository: Repository<Categoria>,
        private produtosService: ProdutosService,
    ) {}

    async findAll(): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
            relations: {
                produtos: true
            }
        });
    }

    async findById(id: number): Promise<Categoria> {

        let categoria = await this.categoriaRepository.findOne({
            where: {
                id
            },
            relations: {
                produtos: true
            }
        });

        if (!categoria)
            throw new HttpException('Categoria não encontrada!', HttpStatus.NOT_FOUND);

        return categoria;
    }


    async findAllByDescricao(descricao: string): Promise<Categoria[]> {
        return await this.categoriaRepository.find({
            where: {
                descricao: ILike(`%${descricao}%`)
            },
            relations: {
                produtos: true
            }
        })
    }

    async create(categoria: Categoria): Promise<Categoria> {

        return await this.categoriaRepository.save(categoria);
    }

    async update(categoria: Categoria): Promise<Categoria> {

        await this.findById(categoria.id)

        return await this.categoriaRepository.save(categoria);
    }

    async delete(id: number): Promise<DeleteResult> {

        await this.findById(id);

        return await this.categoriaRepository.delete(id);

    }


    
}