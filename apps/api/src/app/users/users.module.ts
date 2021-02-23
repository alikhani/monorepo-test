import { Module } from '@nestjs/common';import { TypeOrmModule } from '@nestjs/typeorm';

import { UserEntity } from './entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserRoleEntity } from './entities/user-role.entity';
import { UserRolePermissionEntity } from './entities/user-role-permission.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            UserEntity,
            UserRoleEntity,
            UserRolePermissionEntity
        ])
    ],
    providers: [UsersService],
    exports: [UsersService],
    controllers: [UsersController]
})
export class UsersModule {}
