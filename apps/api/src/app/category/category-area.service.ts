import { HttpException, Injectable } from '@nestjs/common';
import { getManager, UpdateResult } from 'typeorm';

import { CategoryAreaEntity } from './entities/category-area.entity';
import { CreateCategoryAreaDto, PatchCategoryAreaDto } from './category.dto';

@Injectable()
export class CategoryAreaService {
    async find(): Promise<CategoryAreaEntity[]> {
        return getManager().find(CategoryAreaEntity, {
            relations: ['categories']
        });
    }

    async findOne(id): Promise<CategoryAreaEntity> {
        return getManager()
            .findOneOrFail(CategoryAreaEntity, id)
            .catch((err) => {
                throw new HttpException(err.message, 404);
            });
    }

    async findOneByHandle(handle: string): Promise<CategoryAreaEntity> {
        return getManager().findOne(CategoryAreaEntity, {
            where: {
                handle
            }
        });
    }

    async addOne(data: CreateCategoryAreaDto): Promise<CategoryAreaEntity> {
        return getManager().transaction((manager) => {
            const entity = manager.create(CategoryAreaEntity, data);

            return manager.save(entity).catch((err) => {
                throw new HttpException(err.sqlMessage, 500);
            });
        });
    }

    async updateOne(id: string, data: PatchCategoryAreaDto): Promise<UpdateResult> {
        return getManager()
            .update(CategoryAreaEntity, id, data)
            .catch((err) => {
                throw new HttpException(err.sqlMessage, 500);
            });
    }
}
