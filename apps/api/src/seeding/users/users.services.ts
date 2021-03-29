import * as faker from 'faker';
import { IUser } from '@monorepo-test/api-interfaces';
import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { UserRoleEntity } from '../../app/users/entities/user-role.entity';
import { UserEntity } from '../../app/users/entities/user.entity';

import { users } from './data';

@Injectable()
export class UsersSeedingService {
  create(): Array<Promise<UserEntity>> {
    return users.map(async (user: IUser) => {
      return await getManager()
        .findOne(UserEntity, { email: user.email })
        .then(async (dbUser) => {
          if (dbUser) {
            return Promise.resolve(null);
          }

          // Get a random role of [admin, user] and fetch from database to get entity.
          const randomRole = faker.random.arrayElement(['admin', 'user']);
          const userRole = await getManager().findOne(UserRoleEntity, {
            displayName: randomRole,
          });

          const entity = getManager().create(UserEntity, {
            ...user,
            role: userRole,
          });

          return Promise.resolve(await getManager().save(UserEntity, entity));
        })
        .catch((error) => Promise.reject(error));
    });
  }
}
