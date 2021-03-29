import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { UserPermissionSeedingService } from './user-permissions.service';
import { UserRolePermissionEntity } from '../../app/users/entities/user-role-permission.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserRolePermissionEntity])],
  providers: [UserPermissionSeedingService],
  exports: [UserPermissionSeedingService],
})
export class UserPermissionsSeederModule {}
