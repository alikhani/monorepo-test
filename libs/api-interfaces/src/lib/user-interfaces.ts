import { IUserRole } from './user-role-interfaces';

export interface IUser {
  id?: string;
  email: string;
  value: UserStatusEnum;
  role?: IUserRole | string;
}

export enum UserStatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}
