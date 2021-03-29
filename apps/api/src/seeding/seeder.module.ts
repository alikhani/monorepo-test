import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../environments/environment';

import { UserRolePermissionEntity } from '../app/users/entities/user-role-permission.entity';
import { UserRoleEntity } from '../app/users/entities/user-role.entity';
import { UserEntity } from '../app/users/entities/user.entity';
import { CategoryEntity } from '../app/category/entities/category.entity';
import { CategoryAreaEntity } from '../app/category/entities/category-area.entity';
import { UsersSeederModule } from './users/users.module';
import { UserRolesSeederModule } from './roles/user-roles.module';
import { Seeder } from './seeder';
import { UserPermissionsSeederModule } from './permissions/user-permissions.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: environment.mysql.host,
      port: environment.mysql.port,
      username: environment.mysql.username,
      password: environment.mysql.password,
      database: environment.mysql.database,
      timezone: '+00:00',
      cache: false,
      ssl: true,
      entities: [
        CategoryEntity,
        CategoryAreaEntity,
        UserEntity,
        UserRoleEntity,
        UserRolePermissionEntity,
      ],
      synchronize: true,
      multipleStatements: true,
    }),
    UsersSeederModule,
    UserRolesSeederModule,
    UserPermissionsSeederModule,
  ],
  providers: [Logger, Seeder],
})
export class SeederModule {}
