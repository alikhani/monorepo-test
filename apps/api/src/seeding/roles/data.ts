import { IUserRole, UserRolesEnum } from '@monorepo-test/api-interfaces';

import { UserRoleMock } from '@monorepo-test/mocks';

export const userRoles: IUserRole[] = [
  new UserRoleMock().withRole(UserRolesEnum.ADMIN).model(),
  new UserRoleMock().withRole(UserRolesEnum.USER).model(),
];
