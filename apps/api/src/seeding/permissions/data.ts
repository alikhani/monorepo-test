import {
  IUserRolePremission,
  UserPermissionEnum,
} from '@monorepo-test/api-interfaces';

import { UserPermissionMock } from '@monorepo-test/mocks';

export const userPermissions: IUserRolePremission[] = [
  new UserPermissionMock().withPermission(UserPermissionEnum.READ).model(),
  new UserPermissionMock().withPermission(UserPermissionEnum.WRITE).model(),
  new UserPermissionMock().withPermission(UserPermissionEnum.NONE).model(),
];
