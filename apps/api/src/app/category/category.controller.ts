import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';

import { CategoryService } from './category.service';
import {
    CreateCategoryAreaDto,
    CreateCategoryDto,
    PatchCategoryAreaDto,
    PatchCategoryDto
} from './category.dto';
import { CategoryEntity } from './entities/category.entity';
import { CategoryAreaEntity } from './entities/category-area.entity';
import { CategoryAreaService } from './category-area.service';

@Controller('categories')
export class CategoryController {
    constructor(
        private readonly categoryService: CategoryService,
        private readonly categoryAreaService: CategoryAreaService
    ) {}

    ////////////////////////////////////////////////////////////////////////////
    // Category Areas
    ////////////////////////////////////////////////////////////////////////////

    @Get('areas')
    getCategoriesAreas(): Promise<CategoryAreaEntity[]> {
        return this.categoryAreaService.find();
    }

    @Post('areas')
    postCategoryArea(@Body() data: CreateCategoryAreaDto): Promise<CategoryAreaEntity> {
        return this.categoryAreaService.addOne(data);
    }

    @Get('areas/:handle')
    getCategoryAreaByHandle(@Param('handle') handle: string): Promise<CategoryAreaEntity> {
        return this.categoryAreaService.findOneByHandle(handle);
    }

    @Put('areas/:areaId')
    patchCategoryArea(@Param('areaId') areaId: string, @Body() data: PatchCategoryAreaDto) {
        return this.categoryAreaService.updateOne(areaId, data).then(() => {
            return this.categoryAreaService.findOne(areaId);
        });
    }

    ////////////////////////////////////////////////////////////////////////////
    // Category
    ////////////////////////////////////////////////////////////////////////////

    @Get()
    getCategories(): Promise<CategoryEntity[]> {
        return this.categoryService.find();
    }

    @Post()
    postCategory(@Body() data: CreateCategoryDto): Promise<CategoryEntity> {
        return this.categoryService.addOne(data);
    }

    @Get(':categoryHandle')
    getCategoryByHandle(@Param('categoryHandle') categoryHandle: string): Promise<CategoryEntity> {
        return this.categoryService.findOneByHandle(categoryHandle);
    }

    @Put(':categoryId')
    patchCategory(@Param('categoryId') categoryId: string, @Body() data: PatchCategoryDto) {
        return this.categoryService.updateOne(categoryId, data).then(() => {
            return this.categoryService.findOne(categoryId);
        });
    }
}
