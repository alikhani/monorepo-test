import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from '../environments/environment';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserRolePermissionEntity } from './users/entities/user-role-permission.entity';
import { UserRoleEntity } from './users/entities/user-role.entity';
import { UserEntity } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { CategoryModule } from './category/category.module';
import { CategoryEntity } from './category/entities/category.entity';
import { CategoryAreaEntity } from './category/entities/category-area.entity';

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
        UserRolePermissionEntity
      ],
      synchronize: true,
      multipleStatements: true
    }),
    UsersModule,
    CategoryModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}