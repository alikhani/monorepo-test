import { IUser } from './user-interfaces';
import { IUserRolePremission } from './user-role-permission-interfaces';

export interface IUserRole {
  id?: string;
  displayName: UserRolesEnum;
  handle?: string;
  description?: string;
  users?: IUser[] | string[];
  permissions?: IUserRolePremission[];
}

export enum UserRolesEnum {
  ADMIN = 'admin',
  USER = 'user',
}
