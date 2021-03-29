import * as faker from 'faker';
import {
  IUserRolePremission,
  UserPermissionEnum,
} from '@monorepo-test/api-interfaces';

export class UserPermissionMock {
  private _data: IUserRolePremission = {
    handle: faker.random.uuid(),
    displayName: UserPermissionEnum.NONE,
    description: null,
  };

  public withId() {
    this._data.id = faker.random.uuid();
    return this;
  }

  public withPermission(
    role: IUserRolePremission['displayName']
  ): UserPermissionMock {
    this._data.displayName = role;
    return this;
  }

  public withDescription(
    description: IUserRolePremission['description']
  ): UserPermissionMock {
    this._data.description = description;
    return this;
  }

  public model(): IUserRolePremission {
    return this._data;
  }
}
