import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Produtos } from "./produto.entity";
import { ProdutosController } from "../controllers/produto.controller";
import { ProdutosService } from "../services/produto.service";

@Module ({
    imports: [TypeOrmModule.forFeature([Produtos])],
    controllers: [ProdutosController],
    providers: [ProdutosService],
    exports: [ProdutosService],
})
export class ProdutosModule {}