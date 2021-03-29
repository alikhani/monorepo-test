import { Injectable, Logger } from '@nestjs/common';
import { UserPermissionSeedingService } from './permissions/user-permissions.service';
import { UserRolesSeedingService } from './roles/user-roles.service';
import { UsersSeedingService } from './users/users.services';

@Injectable()
export class Seeder {
  constructor(
    private readonly logger: Logger,
    private readonly usersSeederService: UsersSeedingService,
    private readonly userRolesSeederService: UserRolesSeedingService,
    private readonly userPermissionSeederService: UserPermissionSeedingService
  ) {}

  async seed() {
    await this.userRoles()
      .then((completed) => {
        this.logger.debug('Successfuly completed seeding user roles..');
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error('Failed seeding user roles...');
        Promise.reject(error);
      });

    await this.userPermissions()
      .then((completed) => {
        this.logger.debug('Successfuly completed seeding user permissions..');
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error('Failed seeding user permissions...');
        Promise.reject(error);
      });

    await this.users()
      .then((completed) => {
        this.logger.debug('Successfuly completed seeding users...');
        Promise.resolve(completed);
      })
      .catch((error) => {
        this.logger.error('Failed seeding users...');
        Promise.reject(error);
      });
  }

  async userRoles() {
    return await Promise.all(this.userRolesSeederService.create())
      .then((createdUserRoles) => {
        this.logger.debug(
          'No. of USER ROLES created : ' +
            createdUserRoles.filter((nullOrCreatedUser) => nullOrCreatedUser)
              .length
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }

  async userPermissions() {
    return await Promise.all(this.userPermissionSeederService.create())
      .then((createdUserRoles) => {
        this.logger.debug(
          'No. of USER PERMISSIONS created : ' +
            createdUserRoles.filter((nullOrCreatedUser) => nullOrCreatedUser)
              .length
        );

        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }

  async users() {
    return await Promise.all(this.usersSeederService.create())
      .then((createdUser) => {
        this.logger.debug(
          'No. of USERS created : ' +
            createdUser.filter((nullOrCreatedUser) => nullOrCreatedUser).length
        );
        return Promise.resolve(true);
      })
      .catch((error) => Promise.reject(error));
  }
}
