import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Produtos } from "../entities/produto.entity";
import { ILike, Repository } from "typeorm";
import { DeleteResult } from "typeorm/browser";

@Injectable()
export class ProdutosService {
    constructor(
        @InjectRepository(Produtos)
        private produtosRepository: Repository<Produtos>,
    ) {}

    async findAll(): Promise<Produtos[]> {
        return this.produtosRepository.find(
            {
                relations: {
                    categoria: true
                }
            }   
        );
    }

    async findById(id: number): Promise<Produtos> {
        const item = await this.produtosRepository.findOne({
            where: {
                id
            },
            relations: {
                categoria: true
            }
        });

        if (!item)
            throw new HttpException('Item não encontrado', HttpStatus.NOT_FOUND);

        return item;
    }

    async findAllByNome(nome: string): Promise<Produtos[]> {
        return this.produtosRepository.find({
            where: {
                nome: ILike(`%${nome}%`)
            },
            relations: {
                categoria: true
            }
        });
    }

    async create(produto: Produtos): Promise<Produtos> {
        return this.produtosRepository.save(produto);
    }

    async update(produto: Produtos): Promise<Produtos> {
        await this.findById(produto.id);

        return this.produtosRepository.save(produto);
    }

    async delete(id: number): Promise<DeleteResult> {
        await this.findById(id);

        return await this.produtosRepository.delete(id);
    
    }


}