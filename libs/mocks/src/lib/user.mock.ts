import * as faker from 'faker';
import { IUser, UserStatusEnum } from '@monorepo-test/api-interfaces';

export class UserMock {
  private _data: IUser = {
    email: faker.internet.email(),
    value: UserStatusEnum.ACTIVE,
  };

  public withId() {
    this._data.id = faker.random.uuid();
    return this;
  }

  public withRole(role: IUser['role']): UserMock {
    this._data.role = role;
    return this;
  }

  public withStatus(status: IUser['value']): UserMock {
    this._data.value = status;
    return this;
  }

  public model(): IUser {
    return this._data;
  }
}

/* 
Example of less code - better or worse? 

constructor(data?: Partial<IUser>): UserMock {
    this._data = {
      ...this._data,
      ...data,
    };
  }

const user = new UserMock({ id: '207' }).model()

{
    id: '207',
    email: ...
    value: ...
    roleId: ...
}
*/
