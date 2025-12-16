import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaService } from "./services/categoria.service";
import { CategoriaController } from "./controllers/categoria.controller";
import { Categoria } from "./entities/categoria.entity";
import { ProdutosModule } from "../produtos/produto.module";

@Module({
    imports: [TypeOrmModule.forFeature([Categoria]),ProdutosModule],
    providers:  [CategoriaService],
    controllers: [CategoriaController],
    exports: [],
})
export class CategoriaModule {}