import { HttpException, Injectable } from '@nestjs/common';
import { getManager, UpdateResult } from 'typeorm';

import { CategoryEntity } from './entities/category.entity';
import { CreateCategoryDto, PatchCategoryDto } from './category.dto';

@Injectable()
export class CategoryService {
    async find(): Promise<CategoryEntity[]> {
        return getManager().find(CategoryEntity);
    }

    async findOne(id): Promise<CategoryEntity> {
        return getManager()
            .findOneOrFail(CategoryEntity, id)
            .catch((err) => {
                throw new HttpException(err.message, 404);
            });
    }

    async findOneByHandle(handle: string): Promise<CategoryEntity> {
        return getManager().findOne(CategoryEntity, {
            where: {
                handle
            }
        });
    }

    async addOne(data: CreateCategoryDto): Promise<CategoryEntity> {
        return getManager().transaction((manager) => {
            const entity = manager.create(CategoryEntity, data);

            return manager.save(entity).catch((err) => {
                throw new HttpException(err.sqlMessage, 500);
            });
        });
    }

    async updateOne(id: string, data: PatchCategoryDto): Promise<UpdateResult> {
        return getManager()
            .update(CategoryEntity, id, data)
            .catch((err) => {
                throw new HttpException(err.sqlMessage, 500);
            });
    }
}
