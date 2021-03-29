import { IUserRole } from '@monorepo-test/api-interfaces';
import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
import { getManager } from 'typeorm';
import { UserRoleEntity } from '../../app/users/entities/user-role.entity';

import { userRoles } from './data';

@Injectable()
export class UserRolesSeedingService {
  create(): Array<Promise<UserRoleEntity>> {
    return userRoles.map(async (role: IUserRole) => {
      return await getManager()
        .find(UserRoleEntity)
        .then(async (dbUserRole) => {
          if (dbUserRole.length > 0) {
            return Promise.resolve(null);
          }

          const entity = getManager().create(UserRoleEntity, role);
          return Promise.resolve(
            await getManager().save(UserRoleEntity, entity)
          );
        })
        .catch((error) => Promise.reject(error));
    });
  }
}
