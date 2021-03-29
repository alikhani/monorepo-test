import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserRolesSeedingService } from './user-roles.service';
import { UserRoleEntity } from '../../app/users/entities/user-role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRoleEntity])],
  providers: [UserRolesSeedingService],
  exports: [UserRolesSeedingService],
})
export class UserRolesSeederModule {}
