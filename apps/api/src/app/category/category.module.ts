import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryAreaService } from './category-area.service';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { CategoryAreaEntity } from './entities/category-area.entity';
import { CategoryEntity } from './entities/category.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            CategoryEntity,
            CategoryAreaEntity
        ]),
        CategoryModule
    ],
    providers: [
        CategoryService,
        CategoryAreaService
    ],
    controllers: [CategoryController]
})
export class CategoryModule {}
