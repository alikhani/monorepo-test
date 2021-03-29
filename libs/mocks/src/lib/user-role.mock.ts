import * as faker from 'faker';
import { IUserRole, UserRolesEnum } from '@monorepo-test/api-interfaces';

export class UserRoleMock {
  private _data: IUserRole = {
    handle: faker.random.uuid(),
    displayName: UserRolesEnum.USER,
    description: null,
  };

  public withId() {
    this._data.id = faker.random.uuid();
    return this;
  }

  public withRole(role: IUserRole['displayName']): UserRoleMock {
    this._data.displayName = role;
    return this;
  }

  public withDescription(description: IUserRole['description']): UserRoleMock {
    this._data.description = description;
    return this;
  }

  public model(): IUserRole {
    return this._data;
  }
}
