import { IUser } from '@monorepo-test/api-interfaces';

import { UserMock } from '@monorepo-test/mocks';

export const users: IUser[] = [
  new UserMock().model(),
  new UserMock().model(),
  new UserMock().model(),
  new UserMock().model(),
  new UserMock().model(),
  new UserMock().model(),
  new UserMock().model(),
  new UserMock().model(),
  new UserMock().model(),
  new UserMock().model(),
];
