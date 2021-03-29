import { IUserRolePremission } from '@monorepo-test/api-interfaces';
import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { UserRolePermissionEntity } from '../../app/users/entities/user-role-permission.entity';

import { userPermissions } from './data';

@Injectable()
export class UserPermissionSeedingService {
  create(): Array<Promise<UserRolePermissionEntity>> {
    return userPermissions.map(async (permission: IUserRolePremission) => {
      return await getManager()
        .find(UserRolePermissionEntity)
        .then(async (dbUserPermissions) => {
          if (dbUserPermissions.length > 0) {
            return Promise.resolve(null);
          }

          const entity = await getManager().create(
            UserRolePermissionEntity,
            permission
          );
          return Promise.resolve(
            await getManager().save(UserRolePermissionEntity, entity)
          );
        })
        .catch((error) => Promise.reject(error));
    });
  }
}
