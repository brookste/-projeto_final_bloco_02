import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { Produtos } from "./entities/produto.entity";
import { ProdutosService } from "./services/produto.service";
import { ProdutosController } from "./controllers/produto.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Produtos])],
    controllers: [ProdutosController],
    providers:  [ProdutosService],
    exports: [ProdutosService],
})
export class ProdutosModule {}